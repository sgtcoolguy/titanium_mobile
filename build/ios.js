'use strict';

const path = require('path'),
	async = require('async'),
	fs = require('fs-extra'),
	utils = require('./utils'),
	copyFiles = utils.copyFiles,
	copyAndModifyFile = utils.copyAndModifyFile,
	copyAndModifyFiles = utils.copyAndModifyFiles,
	globCopy = utils.globCopy,
	ROOT_DIR = path.join(__dirname, '..'),
	IOS_ROOT = path.join(ROOT_DIR, 'iphone'),
	IOS_LIB = path.join(IOS_ROOT, 'lib');

/**
 * @param {Object} options options object
 * @param {String} options.sdkVersion version of Titanium SDK
 * @param {String} options.gitHash SHA of Titanium SDK HEAD
 * @constructor
 */
function IOS(options) {
	this.sdkVersion = options.sdkVersion;
	this.gitHash = options.gitHash;
	this.timestamp = options.timestamp;
}

IOS.prototype.clean = function (next) {
	// no-op
	next();
};

IOS.prototype.build = function (next) {
	// no-op (used to fetch TiCore in the past)
	next();
};

IOS.prototype.package = function (packager, next) {
	// FIXME This is a hot mess. Why can't we place artifacts in their proper location already like Windows?
	console.log('Zipping iOS platform...');
	const DEST_IOS = path.join(packager.zipSDKDir, 'iphone');

	async.parallel([
		function (callback) {
			async.series([
				function (cb) {
					copyFiles(IOS_ROOT, DEST_IOS, [ 'AppledocSettings.plist', 'Classes', 'cli', 'iphone', 'templates', 'TitaniumKit' ], cb);
				},
				function (cb) {
					copyFiles(IOS_ROOT, DEST_IOS, [ 'AppledocSettings.plist', 'Classes', 'cli', 'iphone', 'templates' ], cb);
				},
				// Copy and inject values for special source files
				function (cb) {
					const subs = {
						__SDK_VERSION__: this.sdkVersion,
						__BUILD_DATE__: this.timestamp,
						__BUILD_HASH__: this.gitHash
					};
					const dest = path.join(DEST_IOS, 'main.m');
					const contents = fs.readFileSync(path.join(DEST_IOS, 'main.m')).toString().replace(/(__.+?__)/g, function (match, key) {
						const s = subs.hasOwnProperty(key) ? subs[key] : key;
						return typeof s === 'string' ? s.replace(/"/g, '\\"').replace(/\n/g, '\\n') : s;
					});
					fs.writeFileSync(dest, contents);
					cb();
				}.bind(this),

				// Copy Ti.Verify
				function (cb) {
					copyFiles(IOS_LIB, DEST_IOS, [ 'libtiverify.a' ], cb);
				},
				// Copy iphone/package.json, but replace __VERSION__ with our version!
				function (cb) {
					copyAndModifyFile(IOS_ROOT, DEST_IOS, 'package.json', { __VERSION__: this.sdkVersion }, cb);
				}.bind(this),
				// Copy iphone/Resources/modules/<name>/* to this.zipSDKDir/iphone/modules/<name>/images
				function (cb) {
					fs.copy(path.join(IOS_ROOT, 'Resources', 'modules'), path.join(DEST_IOS, 'modules'), cb);
				}
			], callback);
		}.bind(this)
	], function (err) {
		if (err) {
			return next(err);
		}
		next();
	});
};

module.exports = IOS;
