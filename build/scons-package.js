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

// TODO Move common constants somewhere?
const ROOT_DIR = path.join(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const ALL_OSES = [ 'win32', 'linux', 'osx' ];
const ALL_PLATFORMS = [ 'ios', 'android', 'windows' ];
const OS_TO_PLATFORMS = {
	win32: [ 'android', 'windows' ],
	osx: [ 'android', 'ios' ],
	linux: [ 'android' ]
};

program
	.option('-a, --all', 'Build a zipfile for every OS')
	.option('-v, --sdk-version [version]', 'Override the SDK version we report', process.env.PRODUCT_VERSION || version)
	.option('-t, --version-tag [tag]', 'Override the SDK version tag we report')
	.option('-s, --skip-zip', 'Do not zip up the package')
	.option('--no-docs', 'Do not generate docs')
	.parse(process.argv);

let platforms = program.args;
let oses = [];

// Are we building every platform for every OS?
if (program.all) {
	oses = ALL_OSES;
	// Assume _ALL_ platforms, we'll filter them out later...
	platforms = ALL_PLATFORMS;
} else {
	// We're building for the host OS
	let thisOS = os.platform();
	if (thisOS === 'darwin') {
		thisOS = 'osx';
	}
	oses.push(thisOS);
	// If user doesn't specify platforms, assume default list by OS
	if (!platforms.length) {
		platforms = OS_TO_PLATFORMS[thisOS];
	}
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

async function packageSDK(program) {
	const hash = await git.getHash(path.join(__dirname, '..'));
	const outputDir = DIST_DIR;
	console.log('Packaging MobileSDK (%s)...', versionTag);

	if (program.docs) {
		await new Documentation(outputDir).generate();
	}

	// Now package for each OS.
	// MUST RUN IN SERIES - this all runs in same directory, so running in
	// parallel for each OS would cause all sorts of collisions right now.
	// TODO Separate out working directories per-OS so we can do in parallel!
	for (const targetOS of oses) {
		await packageCallWrap(outputDir, targetOS, hash);
	}
	console.log('Packaging version (%s) complete', versionTag);

}

packageSDK(program)
	.then(() => process.exit(0))
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
