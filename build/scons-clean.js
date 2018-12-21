#!/usr/bin/env node
'use strict';

const fs = require('fs-extra');
const path = require('path');

/**
 *
 * @param {string[]} platforms list of platforms to clean up
 * @returns {Promise<void>}
 */
async function clean(platforms) {
	await Promise.all(platforms.map(p => {
		const Platform = require('./' + p); // eslint-disable-line security/detect-non-literal-require
		// TODO: Have platforms wipe their portions of the temp folder? (i.e. dist/mobilesdk-<version>-osx/mobilesdk/osx/<version>/iphone)
		return new Platform({}).clean();
	}));
	// FIXME: Don't remove dist/android/libv8!
	return fs.remove(path.resolve(__dirname, '../dist'));
}

if (require.main === module) {
	const program = require('commander');
	const packageJSON = require('../package.json');
	const version = packageJSON.version;
	const ALL_PLATFORMS = [ 'ios', 'android', 'windows' ];

	program
		.option('-v, --sdk-version [version]', 'Override the SDK version we report', process.env.PRODUCT_VERSION || version)
		.option('-t, --version-tag [tag]', 'Override the SDK version tag we report')
		.parse(process.argv);

	let platforms = program.args;
	// if no platforms or single as 'full' use all platforms
	// TODO Replace 'ipad' or 'iphone' with 'ios'
	if (!platforms.length || (platforms.length === 1 && platforms[0] === 'full')) {
		platforms = ALL_PLATFORMS;
	}
	
	clean(platforms)
		.then(() => process.exit(0))
		.catch(err => {
			console.error(err);
			process.exit(1);
		});
}

module.exports = clean;
