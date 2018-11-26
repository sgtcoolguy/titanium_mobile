'use strict';

const exec = require('child_process').exec; // eslint-disable-line security/detect-child-process
const Git = {};

/**
 * Get the short (7-character) SHA hash of HEAD in the supplied workig directory.
 * @param {string} cwd current working directory path
 * @return {Promise<string>}
 */
Git.getHash = function (cwd) {
	return new Promise((resolve, reject) => {
		exec('git rev-parse --short --no-color HEAD', { cwd: cwd }, (error, stdout) => {
			if (error) {
				return reject(new Error(`Failed to get Git HASH: ${error}`));
			}

			resolve(stdout.trim()); // drop leading 'commit ', just take 7-character sha
		});
	});

};

module.exports = Git;
