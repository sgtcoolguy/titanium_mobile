#!/usr/bin/env node
'use strict';

const os = require('os');
const path = require('path');

const Documentation = require('./docs');
const git = require('./git');
const Packager = require('./packager');
const utils = require('./utils');
const packageJSON = require('../package.json');

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

/**
 * 
 * @param {object} program 
 */
async function packageFunc(program) {
	if (!program.gitHash) {
		const hash = await git.getHash();
		program.gitHash = hash || 'n/a';
	}
	if (!program.versionTag) {
		program.versionTag = program.sdkVersion;
	}
	
	const outputDir = DIST_DIR;
	console.log('Packaging MobileSDK (%s)...', program.versionTag);
	const timestamp = utils.timestamp();
	
	await new Documentation(outputDir).generate();

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

	// Now package for each OS.
	// MUST RUN IN SERIES - this all runs in same directory, so running in
	// parallel for each OS would cause all sorts of collisions right now.
	// TODO Separate out working directories per-OS so we can do in parallel!
	for (const targetOS of oses) {
		// Match our master platform list against OS_TO_PLATFORMS[item] listing.
		// Only package the platform if its in both arrays
		const filteredPlatforms = platforms.filter(p => OS_TO_PLATFORMS[targetOS].includes(p));
		await new Packager(outputDir, targetOS, filteredPlatforms, program.sdkVersion, program.versionTag, packageJSON.moduleApiVersion, program.gitHash, timestamp, program.skipZip).package();
	}
	console.log('Packaging version (%s) complete', program.versionTag);
}

if (require.main === module) {
	const program = require('commander');
	const version = packageJSON.version;

	program
		.option('-a, --all', 'Build a zipfile for every OS')
		.option('-v, --sdk-version [version]', 'Override the SDK version we report', process.env.PRODUCT_VERSION || version)
		.option('-t, --version-tag [tag]', 'Override the SDK version tag we report')
		.option('-s, --skip-zip', 'Do not zip up the package')
		.parse(process.argv);

	packageFunc(program)
		.then(() => process.exit(0))
		.catch(err => {
			console.error(err);
					process.exit(1);
		});
}

module.exports = packageFunc;