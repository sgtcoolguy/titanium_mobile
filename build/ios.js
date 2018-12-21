'use strict';

const path = require('path');
const async = require('async');
const fs = require('fs-extra');
const utils = require('./utils');
const promisify = require('util').promisify;
const { spawn } = require('child_process');  // eslint-disable-line security/detect-child-process
const copyFiles = promisify(utils.copyFiles);
const globCopy = promisify(utils.globCopy);
const globCopyFlat = promisify(utils.globCopyFlat);
const ROOT_DIR = path.join(__dirname, '..');
const IOS_ROOT = path.join(ROOT_DIR, 'iphone');
const IOS_LIB = path.join(IOS_ROOT, 'lib');
const gulp = require('gulp');
const changed = require('gulp-changed');

/**
 * @param {Object} options options object
 * @param {String} options.sdkVersion version of Titanium SDK
 * @param {String} options.gitHash SHA of Titanium SDK HEAD
 * @param {String} options.timestamp Value injected for Ti.buildDate
 * @constructor
 */
function IOS(options) {
	this.sdkVersion = options.sdkVersion;
	this.gitHash = options.gitHash;
	this.timestamp = options.timestamp;
}

/**
 * @returns {Promise<void>}
 */
IOS.prototype.clean = function () {
	// no-op
	return Promise.resolve();
};

/**
 * @returns {Promise<void>}
 */
IOS.prototype.build = function () {
	return new Promise((resolve, reject) => {
		console.log('Building TitaniumKit ...');

		const child = spawn(path.join(ROOT_DIR, 'support', 'iphone', 'build_titaniumkit.sh'), [ '-v', this.sdkVersion, '-t', this.timestamp, '-h', this.gitHash ]);
		child.stdout.on('data', data => console.log(`\n${data}`));
		child.stderr.on('data', data => console.log(`\n${data}`));

		child.on('exit', code => {
			if (code) {
				const err = new Error(`TitaniumKit build exited with code ${code}`);
				console.error(err);
				return reject(err);
			}

			console.log('TitaniumKit built successfully!');
			return resolve();
		});
	});
};

IOS.prototype.copyChanged = function (globs, dest, options = {}) {
	return new Promise((resolve, reject) => {
		const mergedOptions = Object.assign({
			cwd: IOS_ROOT,
			base: '.'
		}, options);
		gulp.src(globs, mergedOptions)
			.pipe(changed(dest))
			.pipe(gulp.dest(dest))
			.on('end', () => resolve());
	});
}

/**
 * @returns {Promise<void>}
 */
IOS.prototype.package = async function (packager) {
	// FIXME This is a hot mess. Why can't we place artifacts in their proper location already like Windows?
	console.log('Zipping iOS platform...');
	const DEST_IOS = path.join(packager.zipSDKDir, 'iphone');

	// Copy legacy copies of TiBase.h, TiApp.h etc into 'include/' to retain backwards compatibility in SDK 8.0.0
	// TODO: Inject a deprecation warning if used and remove in SDK 9.0.0
	await globCopyFlat('**/*.h', path.join(IOS_ROOT, 'TitaniumKit', 'TitaniumKit', 'Sources'), path.join(DEST_IOS, 'include'));

	// Copy legacy copies of APSAnalytics.h and APSHTTPClient.h into 'include/' to retain backwards compatibility in SDK 8.0.0
	// TODO: Inject a deprecation warning if used and remove in SDK 9.0.0
	await globCopy('**/*.h', path.join(IOS_ROOT, 'TitaniumKit', 'TitaniumKit', 'Libraries'), path.join(DEST_IOS, 'include'));
	
	// Copy meta files and directories
	await copyFiles(IOS_ROOT, DEST_IOS, [ 'AppledocSettings.plist', 'Classes', 'cli', 'iphone', 'templates' ]);

	// Copy TitaniumKit
	await copyFiles(path.join(IOS_ROOT, 'TitaniumKit', 'build', 'Release-iphoneuniversal'), path.join(DEST_IOS, 'Frameworks'), [ 'TitaniumKit.framework' ]);

	// Copy and inject values for special source files
	const subs = {
		__SDK_VERSION__: this.sdkVersion,
		__BUILD_DATE__: this.timestamp,
		__BUILD_HASH__: this.gitHash
	};
	// TODO: DO we need this? The above constants are not even used so far.
	const dest = path.join(DEST_IOS, 'main.m');
	const contents = await fs.readFile(path.join(ROOT_DIR, 'support', 'iphone', 'main.m'), 'utf8');
	const replaced = contents.replace(/(__.+?__)/g, (match, key) => {
		const s = subs.hasOwnProperty(key) ? subs[key] : key;
		return typeof s === 'string' ? s.replace(/"/g, '\\"').replace(/\n/g, '\\n') : s;
	});
	await fs.writeFile(dest, replaced);

	// Copy Ti.Verify
	await copyFiles(IOS_LIB, DEST_IOS, [ 'libtiverify.a' ]);

	// Copy iphone/package.json, but replace __VERSION__ with our version!
	const packageJSON = fs.readJson(path.join(IOS_ROOT, 'package.json'));
	packageJSON.version = this.sdkVersion;
	await fs.writeJson(path.join(DEST_IOS, 'package.json'), packageJSON);

	// Copy iphone/Resources/modules/<name>/* to this.zipSDKDir/iphone/modules/<name>/images
	// TODO: Pretty sure these can be removed nowadays
	await fs.copy(path.join(IOS_ROOT, 'Resources', 'modules'), path.join(DEST_IOS, 'modules'));
};

module.exports = IOS;
