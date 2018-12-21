#!/usr/bin/env node
'use strict';

const utils = require('./utils');

/**
 * @param {string} versionTag 
 * @returns {Promise<void>}
 */
function install(versionTag) {
	return new Promise((resolve, reject) => {
		utils.installSDK(versionTag, err => {
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
}

if (require.main === module) {
	const program = require('commander');
	const version = require('../package.json').version;

	// TODO: Add option for just symlinking dir under dist to mobilesdk/<os>/<version>?
	program
		.option('-v, --sdk-version [version]', 'Override the SDK version we report', process.env.PRODUCT_VERSION || version)
		.option('-t, --version-tag [tag]', 'Override the SDK version tag we report')
		.parse(process.argv);

	const versionTag = program.versionTag || program.sdkVersion;
	install(versionTag)
		.then(() => process.exit(0))
		.catch(err => {
			console.error(err);
			process.exit(1);
		});
}

module.exports = install;
