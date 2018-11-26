#!/usr/bin/env node
'use strict';

const os = require('os');
const path = require('path');
const program = require('commander');
const packageJSON = require('../package.json');
const version = packageJSON.version;
const Documentation = require('./docs');
const git = require('./git');
const Packager = require('./packager');
const utils = require('./utils');
const promisify = require('util').promisify;
// TODO Move common constants somewhere?
const ROOT_DIR = path.join(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const OS_TO_PLATFORMS = {
	win32: [ 'android', 'windows' ],
	osx: [ 'android', 'ios' ],
	linux: [ 'android' ]
};

program
	.option('-v, --sdk-version [version]', 'Override the SDK version we report', process.env.PRODUCT_VERSION || version)
	.option('-t, --version-tag [tag]', 'Override the SDK version tag we report')
	.option('-a, --api-level [number]', 'Explicitly set the Android SDK API level used for building')
	.option('-s, --android-sdk [path]', 'Explicitly set the path to the Android SDK used for building', process.env.ANDROID_SDK)
	.option('-n, --android-ndk [path]', 'Explicitly set the path to the Android NDK used for building', process.env.ANDROID_NDK)
	.parse(process.argv);

// We're building for the host OS
let thisOS = os.platform();
if (thisOS === 'darwin') {
	thisOS = 'osx';
}
const oses = [ thisOS ];

let platforms = program.args;
if (!platforms.length) {
	platforms = OS_TO_PLATFORMS[thisOS];
}

const versionTag = program.versionTag || program.sdkVersion;

function packageCallWrap(outputDir, targetOS, hash) {
	// Match our master platform list against OS_TO_PLATFORMS[item] listing.
	// Only package the platform if its in both arrays
	const filteredPlatforms = [];
	for (let i = 0; i < platforms.length; i++) {
		if (OS_TO_PLATFORMS[targetOS].indexOf(platforms[i]) !== -1) {
			filteredPlatforms.push(platforms[i]);
		}
	}

	return new Promise((resolve, reject) => {
		new Packager(outputDir, targetOS, filteredPlatforms, program.sdkVersion, versionTag, packageJSON.moduleApiVersion, hash, program.docs, program.skipZip).package(err => {
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
}

async function cleanbuild() {
	const hash = await git.getHash(path.join(__dirname, '..'));
	program.gitHash = hash;
	program.timestamp = utils.timestamp();
	console.log('Building MobileSDK version %s, githash %s, buildDate %s', program.sdkVersion, program.gitHash, program.timestamp);

	const platformObjects = platforms.map(item => {
		const Platform = require(`./${item}`); // eslint-disable-line security/detect-non-literal-require
		return new Platform(program);
	});

	// clean in parallel
	await Promise.all(platformObjects.map(platform => promisify(platform.clean)()));

	// build in series
	for (const platform of platformObjects) {
		await promisify(platform.build)();
	}

	// generate docs
	await new Documentation(DIST_DIR).generate();

	// Package SDK
	for (const targetOS of oses) {
		// Match our master platform list against OS_TO_PLATFORMS[item] listing.
		// Only package the platform if its in both arrays
		await packageCallWrap(DIST_DIR, targetOS, hash);
	}

	console.log('Packaging version (%s) complete', versionTag);

	await promisify(utils.installSDK)(versionTag);
}

cleanbuild()
	.then(() => process.exit(0))
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
