#!/usr/bin/env node
'use strict';

const path = require('path');
const program = require('commander');
const version = require('../package.json').version;
const git = require('./git');
const utils = require('./utils');
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

/**
 * [buildPlatform description]
 * @param  {string} platformName [description]
 * @param  {object} program
 * @return {Promise}              [description]
 */
function buildPlatform(platformName, program) {
	return new Promise((resolve, reject) => {
		const Platform = require(`./${platformName}`); // eslint-disable-line security/detect-non-literal-require
		new Platform(program).build(err => {
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
}

async function build(program) {
	const hash = await git.getHash(path.join(__dirname, '..'));
	program.gitHash = hash || 'n/a';
	program.timestamp = utils.timestamp();
	console.log('Building MobileSDK version %s, githash %s', program.sdkVersion, program.gitHash);

	for (const platformName of platforms) {
		await buildPlatform(platformName, program);
	}
}
build(program)
	.then(() => process.exit(0))
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
