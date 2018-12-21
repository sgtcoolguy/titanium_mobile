'use strict';

const copyFile = require('./utils').copyFile;

/**
 * @param {Object} options options object
 * @param {String} options.sdkVersion version of Titanium SDK
 * @param {String} options.gitHash SHA of Titanium SDK HEAD
 */
function Windows(options) {
	this.sdkVersion = options.sdkVersion;
	this.gitHash = options.gitHash;
}

/**
 * @returns {Promise<void>}
 */
Windows.prototype.clean = function () {
	// no-op
	return Promise.resolve();
};

/**
 * @returns {Promise<void>}
 */
Windows.prototype.build = function () {
	// TODO Pull the zipfile down and extract it?
	return Promise.resolve();
};

/**
 * @returns {Promise<void>}
 */
Windows.prototype.package = function (packager) {
	return new Promise((resolve, reject) => {
		console.log('Zipping Windows platform...');
		// Windows is already all in place. We should be careful to ignore folders/files that don't apply for OS
		copyFile(packager.srcDir, packager.zipSDKDir, 'windows', err => {
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
};

module.exports = Windows;
