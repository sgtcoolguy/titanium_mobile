'use strict';

const path = require('path');
const os = require('os');
const util = require('util');
const exec = require('child_process').exec; // eslint-disable-line security/detect-child-process
const spawn = require('child_process').spawn; // eslint-disable-line security/detect-child-process
const fs = require('fs-extra');
const gulp = require('gulp');
const changed = require('gulp-changed');
const gulpBabel = require('gulp-babel');
const version = require('node-appc').version;
const utils = require('./utils');
const copyFile = utils.copyFile;
const downloadURL = util.promisify(utils.downloadURL);
const ROOT_DIR = path.join(__dirname, '..');
const SUPPORT_DIR = path.join(ROOT_DIR, 'support');
const V8_STRING_VERSION_REGEXP = /(\d+)\.(\d+)\.\d+\.\d+/;

/**
 * Given a folder we'd like to zip up and the destination filename, this will zip up the directory contents.
 * Be aware that the top-level of the zip will not be the directory itself, but it's contents.
 *
 * @param  {String}   folder   The folder whose contents will become the zip contents
 * @param  {String}   filename The output zipfile
 * @returns  {Promise<void>}
 */
function zip(folder, filename) {
	return new Promise((resolve, reject) => {
		const command = os.platform() === 'win32' ? path.join(ROOT_DIR, 'build', 'win32', 'zip') : 'zip';
		exec(`${command} -9 -q -r "${path.join('..', path.basename(filename))}" *`, { cwd: folder }, err => {
			if (err) {
				return reject(err);
			}

			const outputFolder = path.resolve(folder, '..');
			const outputFile = path.join(outputFolder, path.basename(filename));
			if (outputFile == filename) { // eslint-disable-line eqeqeq
				return resolve();
			}

			const destFolder = path.dirname(filename);
			copyFile(outputFolder, destFolder, path.basename(filename), err2 => {
				if (err2) {
					return reject(err2);
				}
				resolve();
			});
		});
	});
}

/**
 * 
 * @param {string} zipfile 
 * @param {string} dest 
 * @returns {Promise<void>}
 */
function unzip(zipfile, dest) {
	return new Promise((resolve, reject) => {
		console.log(`Unzipping ${zipfile} to ${dest}`);
		const command = os.platform() === 'win32' ? path.join(ROOT_DIR, 'build', 'win32', 'unzip') : 'unzip';
		const child = spawn(command, [ '-o', zipfile, '-d', dest ], { stdio: [ 'ignore', 'ignore', 'pipe' ] });
		let err = '';
		child.stderr.on('data', buffer => {
			err += buffer.toString();
		});
		child.on('error', err => reject(err));
		child.on('close', code => {
			if (code !== 0) {
				return reject(`Unzipping of ${zipfile} exited with non-zero exit code ${code}. ${err}`);
			}
			resolve();
		});
	});
}

/**
 * @param {String} outputDir path to place the temp files and zipfile
 * @param {String} targetOS  'win32', 'linux', or 'osx'
 * @param {string[]} platforms The list of SDK platforms to package
 * @param {string} version version string to use
 * @param {string} versionTag version tag
 * @param {string} moduleApiVersion module api version
 * @param {string} gitHash git commit SHA
 * @param {string} timestamp build date/timestamp
 * @param {boolean} [skipZip] Optionally skip zipping up the result
 * @constructor
 */
function Packager(outputDir, targetOS, platforms, version, versionTag, moduleApiVersion, gitHash, timestamp, skipZip) {
	this.srcDir = ROOT_DIR;
	this.outputDir = outputDir; // root folder where output is placed
	this.targetOS = targetOS;
	this.platforms = platforms;
	this.version = version;
	this.versionTag = versionTag;
	this.moduleApiVersion = moduleApiVersion;
	this.gitHash = gitHash;
	this.timestamp = timestamp;
	this.zipFile = path.join(this.outputDir, `mobilesdk-${this.versionTag}-${this.targetOS}.zip`);
	this.packagers = {
		android: this.zipAndroid.bind(this),
		ios: this.zipIOS.bind(this),
		windows: this.zipWindows.bind(this)
	};
	// Location where we build up the zip file contents
	this.zipDir = path.join(this.outputDir, `mobilesdk-${this.versionTag}-${this.targetOS}`);
	this.zipSDKDir = path.join(this.zipDir, 'mobilesdk', this.targetOS, this.versionTag);
	this.skipZip = skipZip;
}

/**
 * generates the manifest.json we ship with the SDK
 * @returns {Promise<void>}
 */
Packager.prototype.generateManifestJSON = async function () {
	console.log('Writing manifest.json');
	const modifiedPlatforms = this.platforms.slice(0); // need to work on a copy!
	const json = {
		name: this.versionTag,
		version: this.version,
		moduleAPIVersion: this.moduleApiVersion,
		timestamp: this.timestamp,
		githash: this.gitHash
	};

	// Replace ios with iphone
	const index = modifiedPlatforms.indexOf('ios');
	if (index !== -1) {
		modifiedPlatforms.splice(index, 1, 'iphone');
	}
	json.platforms = modifiedPlatforms;
	return fs.writeJSON(path.join(this.zipSDKDir, 'manifest.json'), json);
};

/**
 * Zips up the iOS SDK portion
 * @param  {Function} next callback function
 */
Packager.prototype.zipIOS = async function () {
	const IOS = require('./ios');
	return new IOS({ sdkVersion: this.version, gitHash: this.gitHash, timestamp: this.timestamp }).package(this);
};

Packager.prototype.zipWindows = async function () {
	const Windows = require('./windows');
	return new Windows({ sdkVersion: this.version, gitHash: this.gitHash, timestamp: this.timestamp }).package(this);
};

/**
 * Zips up the Android SDK portion
 * @param  {Function} next callback function
 */
Packager.prototype.zipAndroid = async function () {
	const Android = require('./android');
	return new Android({ sdkVersion: this.version, gitHash: this.gitHash, timestamp: this.timestamp }).package(this);
};

/**
 * Includes the pre-packaged pre-built native modules. We now gather them from a JSON file listing URLs to download.
 * @returns {Promise<void>}
 */
Packager.prototype.includePackagedModules = async function () {
	console.log('Zipping packaged modules');
	// Unzip all the zipfiles in support/module/packaged
	let supportedPlatforms = this.platforms.concat([ 'commonjs' ]);
	// Include aliases for ios/iphone/ipad
	if (supportedPlatforms.includes('ios')
		|| supportedPlatforms.includes('iphone')
		|| supportedPlatforms.includes('ipad')) {
		supportedPlatforms = supportedPlatforms.concat([ 'ios', 'iphone', 'ipad' ]);
	}

	// Hyperloop has no single platform downloads yet, so we use a fake platform
	// that will download the all-in-one distribution.
	supportedPlatforms = supportedPlatforms.concat([ 'hyperloop' ]);

	let modules = []; // module objects holding url/integrity
	// Read modules.json, grab the object for each supportedPlatform
	const modulesJSON = await fs.readJson(path.join(SUPPORT_DIR, 'module', 'packaged', 'modules.json'));
	for (const platform of supportedPlatforms) {
		const modulesForPlatform = modulesJSON[platform];
		if (modulesForPlatform) {
			modules = modules.concat(Object.values(modulesForPlatform));
		}
	}
	// remove duplicates
	modules = Array.from(new Set(modules));

	// Fetch the listed modules from URLs...
	// FIXME Don't show progress bars, because they clobber each other
	const zipFiles = await Promise.all(modules.map(m => downloadURL(m.url, m.integrity)));
	// ...then unzip them
	// MUST RUN IN SERIES or they will clobber each other and unzip will fail mysteriously
	for (const zipFile of zipFiles) {
		await unzip(zipFile, this.zipDir);
	}

	// Need to wipe out irrelevant dirs inside modules based on target OS!
	if (!this.platforms.includes('windows')) {
		await fs.remove(path.join(this.zipDir, 'modules', 'windows'));
	}
	if (!this.platforms.includes('android')) {
		await fs.remove(path.join(this.zipDir, 'modules', 'android'));
	}
	if (!this.platforms.includes('ios') && !this.platforms.includes('iphone') && !this.platforms.includes('ipad')) {
		await fs.remove(path.join(this.zipDir, 'modules', 'iphone'));
	}
};

/**
 * Zip it all up and wipe the zip dir
 * @returns {Promise<void>}
 */
Packager.prototype.zip = async function () {
	if (this.skipZip) {
		return;
	}
	return zip(this.zipDir, this.zipFile);
};

Packager.prototype.copyJSCA = async function() {
	console.log('Writing JSCA');
	return this.gulpChanged(path.join(this.outputDir, 'api.jsca'), { base: this.outputDir }); // FIXME This is going into mobilesdk/osx/8.0.0/dist/api.jsca rather than mobilesdk/osx/8.0.0/api.jsca
}

Packager.prototype.gulpChanged = async function (globs, options = {}) {
	const mergedOptions = Object.assign({
		cwd: this.srcDir,
		base: '.'
	}, options);
	return new Promise((resolve, reject) => {
		gulp.src(globs, mergedOptions)
			.pipe(changed(this.zipSDKDir))
			.pipe(gulp.dest(this.zipSDKDir))
			.on('end', () => resolve());
	});
}

/**
 * uses gulp-changed to copy only the changed set of files from the given globs to this.zipSDKDir
 * @param {string|string[]} globs globs to pass to `gulp.src()`
 */
Packager.prototype.copyChanged = async function (globs) {
	return this.gulpChanged(globs);
}

Packager.prototype.transpileCommonJS = async function () {
	return new Promise((resolve, reject) => {
	console.log('Transpiling common SDK JS');
	const destDir = path.join(this.zipSDKDir, 'common');
	// Pull out android's V8 target (and transform into equivalent chrome version)
	const v8Version = require('../android/package.json').v8.version;
	const found = v8Version.match(V8_STRING_VERSION_REGEXP);
	const chromeVersion = parseInt(found[1] + found[2]); // concat the first two numbers as string, then turn to int
	// Now pull out min IOS target
	const minSupportedIosSdk = version.parseMin(require('../iphone/package.json').vendorDependencies['ios sdk']);
	gulp.src(this.srcDir + '/common/**/*.js')
		.pipe(changed(destDir))
		.pipe(gulpBabel({
			presets: [
				[ '@babel/env', {
					targets: {
						// TODO: filter to only targets relevant for platforms we're building?
						ios: minSupportedIosSdk,
						chrome: chromeVersion
					}
				} ]
			]
		}))
		.pipe(gulp.dest(destDir))
		.on('end', () => resolve());
	});
}

Packager.prototype.pruneToProduction = async function () {
	return new Promise((resolve, reject) => {
		console.log('Pruning to production npm dependencies');
		exec('npm prune --production', { cwd: this.zipSDKDir }, (err, stdout, stderr) => {
			if (err) {
				console.log(stdout);
				console.error(stderr);
				return reject(err);
			}
			resolve();
		});
	});
}

Packager.prototype.removeNPMBinaries = async function () {
	return fs.remove(path.join(this.zipSDKDir, 'node_modules', '.bin'));
}

/**
 * Now include all the pre-built node-ios-device bindings/binaries
 */
Packager.prototype.packagePrebuiltNPMBinaries = async function () {
	if (this.targetOS !== 'osx') {
		return;
	}
	
	let dir = path.join(this.zipSDKDir, 'node_modules', 'node-ios-device');
	if (!fs.existsSync(dir)) {
		dir = path.join(this.zipSDKDir, 'node_modules', 'ioslib', 'node_modules', 'node-ios-device');
	}

	if (!fs.existsSync(dir)) {
		throw new Error('Unable to find node-ios-device module');
	}
	return new Promise((resolve, reject) => {
		exec('node bin/download-all.js', { cwd: dir, stdio: 'inherit' }, (err, stdut, stderr) => {
			if (err) {
				console.log(stdout);
				console.error(stderr);
				return reject(err);
			}
			resolve();
		});
	});
}

/**
 * @returns {Promise<void>}
 */
Packager.prototype.hackTitaniumSDKDependency = async function () {
	// FIXME Remove these hacks for titanium-sdk when titanium-cli has been released and the tisdk3fixes.js hook is gone!
	// Now copy over hacked titanium-sdk fake node_module	
	console.log('Copying titanium-sdk node_module stub for backwards compatibility with titanium-cli');
	await fs.copy(path.join(__dirname, 'titanium-sdk'), path.join(this.zipSDKDir, 'node_modules', 'titanium-sdk'));
	
	// Hack the package.json to include "titanium-sdk": "*" in dependencies
	console.log('Inserting titanium-sdk as production dependency');
	const packageJSON = await fs.readJson(path.join(this.zipSDKDir, 'package.json'));
	packageJSON.dependencies['titanium-sdk'] = '*';
	return fs.writeJson(path.join(this.zipSDKDir, 'package.json'), packageJSON);
}

Packager.prototype.copySupportFiles = async function () {
	// FIXME: This isn't placing things in the right place!
	// i.e. libtiverify.so from support/android/native/libs/*/libtiverify.so should go into dist/android/native/libs/*, but is instead going to:
	// dist/support/android/native/libs/*
	const globs = [ 'support/**', '!support/module/packaged/**', '!support/dev/**' ];

	// if on OS that can't do ios, or we're not building ios, don't include it
	if (this.targetOS === 'win32' || this.targetOS === 'linux' || 
		!this.platforms.includes('ios') && !this.platforms.includes('iphone') && !this.platforms.includes('ipad')) {
		globs.push('!support/iphone/**');
	}
	// if platforms doesn't contain "android", don't copy it!
	if (!this.platforms.includes('android')) {
		globs.push('!support/android/**');
	}
	
	return this.copyChanged(globs);
}

/**
 * [package description]
 * @returns {Promise<void>}
 */
Packager.prototype.package = async function () {
	console.log('Zipping Mobile SDK');
	// first let's ensure our output dir exists
	await fs.ensureDir(this.zipSDKDir);
	
	// then in parallel, do a bunch of copying/transpiling, grabbing native modules
	await Promise.all([
		this.generateManifestJSON(),
		this.copyJSCA(),
		this.copyChanged([ 'CREDITS', 'README.md', 'package.json', 'cli/**', 'node_modules/**', 'templates/**' ]),
		this.transpileCommonJS(),
		this.includePackagedModules(),
		this.copySupportFiles(),
	]);

	// once done with above (specifically copying node_modules), then do in series:
	await this.pruneToProduction();
	await this.removeNPMBinaries();
	await this.packagePrebuiltNPMBinaries();
	await this.hackTitaniumSDKDependency();
	
	// zip the platforms
	for (const platform of this.platforms) {
		await this.packagers[platform]();
	}
	// zip it all up
	await this.zip();
};

module.exports = Packager;
