#!/usr/bin/env node
'use strict';

const path = require('path');
const git = require('./git');
const utils = require('./utils');

/**
 * 
 * @param {string[]} platforms 
 * @param {object} program
 * @returns {Promise<void>}
 */
async function build(platforms, program) {
	const hash = await git.getHash();
	program.gitHash = hash || 'n/a';
	program.timestamp = utils.timestamp();
	console.log('Building MobileSDK version %s, githash %s', program.sdkVersion, program.gitHash);

	for (const p of platforms) {
		const Platform = require('./' + p); // eslint-disable-line security/detect-non-literal-require
		await new Platform(program).build();
	}
}

if (require.main === module) {
	const program = require('commander');
	const version = require('../package.json').version;
	const ALL_PLATFORMS = [ 'ios', 'android', 'windows' ];

	program
		.option('-v, --sdk-version [version]', 'Override the SDK version we report', process.env.PRODUCT_VERSION || version)
		.option('-a, --api-level [number]', 'Explicitly set the Android SDK API level used for building')
		.option('-s, --android-sdk [path]', 'Explicitly set the path to the Android SDK used for building', process.env.ANDROID_SDK)
		.option('-n, --android-ndk [path]', 'Explicitly set the path to the Android NDK used for building', process.env.ANDROID_NDK)
		.parse(process.argv);

	let platforms = program.args;
	// if no platforms or single as 'full' use all platforms
	if (!platforms.length || (platforms.length === 1 && platforms[0] === 'full')) {
		platforms = ALL_PLATFORMS;
	}

	// TODO Allow iphone/ipad alias for ios!
	build(platforms, program)
		.then(() => process.exit(0))
		.catch(err => {
			console.error(err);
			process.exit(1);
		});
}

module.exports = build;