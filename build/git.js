'use strict';

const path = require('path');
const util = require ('util');
const exec = util.promisify(require('child_process').exec); // eslint-disable-line security/detect-child-process

const Git = {
	/**
	 * Get the short (7-character) SHA hash of HEAD in the supplied workig directory.
	 * @param {string} cwd current working directory path
	 * @returns {Promise<string>}
	 */
	getHash: async function (cwd = path.join(__dirname, '..')) {
		const result = await exec('git rev-parse --short --no-color HEAD', { cwd: cwd });
		return result.stdout.trim();
	}
};

module.exports = Git;
