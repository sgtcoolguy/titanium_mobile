#!/usr/bin/env node
'use strict';

// scons commands/functions
const build = require('./scons-build');
const clean = require('./scons-clean');
const install = require('./scons-install');
const packageCmd = require('./scons-package');

async function cleanbuild(platforms, program) {
	await clean(platforms);
	await build(platforms, program);
	await packageCmd(platforms, program);
	const versionTag = program.versionTag || program.sdkVersion;
	await install(versionTag);
}

if (require.main === module) {
	const os = require('os'),
		path = require('path'),
		async = require('async'),
		program = require('commander'),
		packageJSON = require('../package.json'),
		version = packageJSON.version,
		Documentation = require('./docs'),
		git = require('./git'),
		Packager = require('./packager'),
		utils = require('./utils');
	// TODO Move common constants somewhere?
	const ROOT_DIR = path.join(__dirname, '..'),
		DIST_DIR = path.join(ROOT_DIR, 'dist'),
		OS_TO_PLATFORMS = {
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
	cleanbuild(platforms)
		.then(() => process.exit(0))
		.catch(err => {
			console.error(err);
			process.exit(1);
		});
}

async.series([
	function (next) {
		git.getHash(path.join(__dirname, '..'), function (err, hash) {
			program.gitHash = hash;
			program.timestamp = utils.timestamp();
			console.log('Building MobileSDK version %s, githash %s, buildDate %s', program.sdkVersion, program.gitHash, program.timestamp);
			next(err);
		});
	}
], function (err) {
	if (err) {
		console.error(err);
		process.exit(1);
		return;
	}

	clean(platforms, function (err) {
		if (err) {
			console.error(err);
			process.exit(1);
		}

		async.eachSeries(platforms, function (item, next) {
			const Platform = require('./' + item); // eslint-disable-line security/detect-non-literal-require
			new Platform(program).build(next);
		}, function (err) {
			if (err) {
				console.error(err);
				process.exit(1);
			}

			// Generate docs
			new Documentation(DIST_DIR).generate(function (err) {
				if (err) {
					console.error(err);
					process.exit(1);
				}

				// TODO Avoid zipping during packaging and just copy over to install it!
				async.eachSeries(oses, function (targetOS, next) {
					// Match our master platform list against OS_TO_PLATFORMS[item] listing.
					// Only package the platform if its in both arrays
					const filteredPlatforms = [];
					for (let i = 0; i < platforms.length; i++) {
						if (OS_TO_PLATFORMS[targetOS].indexOf(platforms[i]) !== -1) {
							filteredPlatforms.push(platforms[i]);
						}
					}

					new Packager(DIST_DIR, targetOS, filteredPlatforms, program.sdkVersion, versionTag, packageJSON.moduleApiVersion, program.gitHash, program.timestamp).package(next);
				}, function (err) {
					if (err) {
						console.error(err);
						process.exit(1);
					}
					console.log('Packaging version (%s) complete', versionTag);

					install(versionTag, function (err) {
						if (err) {
							console.error(err);
							process.exit(1);
						}
						process.exit(0);
					});
				});
			});
		});
	});
});
