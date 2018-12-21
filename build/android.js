'use strict';

const path = require('path');
const async = require('async');
const fs = require('fs-extra');
const ant = require('./ant');
const promisify = require('util').promisify;
const utils = require('./utils');
const copyFile = promisify(utils.copyFile);
const copyFiles = promisify(utils.copyFiles);
const globCopy = promisify(utils.globCopy);

const BUILD_XML = path.join(__dirname, '..', 'android', 'build.xml');

/**
 * @param {Object} options options object
 * @param {String} options.androidSdk path to the Android SDK to build with
 * @param {String} options.androidNdk path to the Andorid NDK to build with
 * @param {String|Number} options.apiLevel APILevel to build against
 * @param {String} options.sdkVersion version of Titanium SDK
 * @param {String} options.gitHash SHA of Titanium SDK HEAD
 * @constructor
 */
function Android(options) {
	this.androidSDK = options.androidSdk;
	this.androidNDK = options.androidNdk;
	this.apiLevel = options.apiLevel;
	this.sdkVersion = options.sdkVersion;
	this.gitHash = options.gitHash;
}

/**
 * @returns {Promise<void>}
 */
Android.prototype.clean = function () {
	return new Promise((resolve, reject) => {
		ant.build(BUILD_XML, [ 'clean' ], {}, function (err) {
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
};

/**
 * @returns {Promise<void>}
 */
Android.prototype.build = function () {
	return new Promise((resolve, reject) => {
		const AndroidSDK = require('./androidsdk');
		const sdk = new AndroidSDK(this.androidSDK, this.apiLevel);
		const properties = {
			'build.version': this.sdkVersion,
			'build.githash': this.gitHash,
			'android.sdk': sdk.getAndroidSDK(),
			'android.platform': sdk.getPlatformDir(),
			'google.apis': sdk.getGoogleApisDir(),
			'kroll.v8.build.x86': 1,
			'android.ndk': this.androidNDK
		};
		ant.build(BUILD_XML, [ 'full.build' ], properties, function (err) {
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
};

/**
 * @returns {Promise<void>}
 */
Android.prototype.package = async function (packager) {
	console.log('Zipping Android platform...');
	// FIXME This is a hot mess. Why can't we place artifacts in their proper location already like Windows?
	const DIST_ANDROID = path.join(packager.outputDir, 'android');
	const ANDROID_ROOT = path.join(packager.srcDir, 'android');
	const ANDROID_DEST = path.join(packager.zipSDKDir, 'android');
	const MODULE_ANDROID = path.join(packager.zipSDKDir, 'module', 'android');
	const ANDROID_MODULES = path.join(ANDROID_DEST, 'modules');

	// ensure some of our destination folders:
	await Promise.all([
		fs.ensureDir(path.join(ANDROID_DEST, 'native', 'include')),
		fs.ensureDir(MODULE_ANDROID),
	]);

	// android/
	await Promise.all([
		// Copy dist/android/*.jar, dist/android/modules.json
		copyFiles(DIST_ANDROID, ANDROID_DEST, [ 'titanium.jar', 'kroll-apt.jar', 'kroll-common.jar', 'kroll-v8.jar', 'java_websocket.jar', 'modules.json' ]),

		// Copy android/dependency.json, android/cli/, and android/templates/
		copyFiles(ANDROID_ROOT, ANDROID_DEST, [ 'cli', 'templates', 'dependency.json' ]),

		// Copy JARs from android/kroll-apt/lib
		globCopy('**/*.jar', path.join(ANDROID_ROOT, 'kroll-apt', 'lib'), ANDROID_DEST),

		// Copy JARs from android/titanium/lib
		fs.copy(path.join(ANDROID_ROOT, 'titanium', 'lib'), ANDROID_DEST, {
			filter: src => src.indexOf('commons-logging-1.1.1') === -1 // Don't copy commons-logging-1.1.1.jar
		}),
	]);

	// copy android/package.json, but replace __VERSION__ with our version!
	const packageJSON = fs.readJson(path.join(ANDROID_ROOT, 'package.json'));
	packageJSON.version = this.sdkVersion;
	await fs.writeJson(path.join(ANDROID_DEST, 'package.json'), packageJSON);

	// android/native/include
	// include headers for v8 3rd party module building
	const v8Props = require(path.join(ANDROID_ROOT, 'package.json')).v8; // eslint-disable-line security/detect-non-literal-require
	const libv8Headers = path.join(ANDROID_ROOT, 'runtime', 'v8', 'libv8', v8Props.version, v8Props.mode, 'include');
	await Promise.all([
		globCopy('**/*.h', path.join(ANDROID_ROOT, 'runtime', 'v8', 'src', 'native'), path.join(ANDROID_DEST, 'native', 'include')),
		globCopy('**/*.h', path.join(ANDROID_ROOT, 'runtime', 'v8', 'generated'), path.join(ANDROID_DEST, 'native', 'include')),
		globCopy('**/*.h', libv8Headers, path.join(ANDROID_DEST, 'native', 'include')),
	]);
	// android/native/libs
	// include all native shared libraries TODO Adjust to only copy *.so files, filter doesn't work well for that
	await fs.copy(path.join(DIST_ANDROID, 'libs'), path.join(ANDROID_DEST, 'native', 'libs'));

	// module/android
	await Promise.all([
		// add js2c.py for js -> C embedding
		copyFiles(path.join(ANDROID_ROOT, 'runtime', 'v8', 'tools'), MODULE_ANDROID, [ 'js2c.py', 'jsmin.py' ]),
		copyFile(DIST_ANDROID, MODULE_ANDROID, 'ant-tasks.jar'),
		copyFile(path.join(ANDROID_ROOT, 'build', 'lib'), MODULE_ANDROID, 'ant-contrib-1.0b3.jar'),
	]);

	// android/modules/
	// Copy android/modules/*/lib/*.jar
	const moduleDirs = fs.readdirSync(path.join(ANDROID_ROOT, 'modules'));
	for (const dir of moduleDirs) {
		// skip geolocation
		if ([ 'geolocation' ].includes(dir)) {
			continue;
		}

		const moduleLibDir = path.join(ANDROID_ROOT, 'modules', dir, 'lib');
		if (fs.existsSync(moduleLibDir)) {
			await globCopy('*.jar', moduleLibDir, ANDROID_DEST);
		}
	}

	// Copy over module resources
	const filterRegExp = new RegExp('\\' + path.sep  + 'android(\\' + path.sep + 'titanium-(.+)?.(jar|res.zip|respackage))?$'); // eslint-disable-line security/detect-non-literal-regexp
	await fs.copy(DIST_ANDROID, ANDROID_MODULES, { filter: src => filterRegExp.test(src) });
};

module.exports = Android;
