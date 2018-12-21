'use strict';

const spawn = require('child_process').spawn; // eslint-disable-line security/detect-child-process
const fs = require('fs');
const path = require('path');
const ROOT_DIR = path.join(__dirname, '..');
const DOC_DIR = path.join(ROOT_DIR, 'apidoc');

/**
 * @param       {string} outputDir output directory for generated documentation
 * @constructor
 */
function Documentation(outputDir) {
	this.outputDir = outputDir;
	this.hasWindows = fs.existsSync(path.join(ROOT_DIR, 'windows'));
}

Documentation.prototype.prepare = function (next) {
	// no-op now...
	next();
};

/**
 * @param {string} format
 * @param {string} filename
 * @returns {Promise<string>}
 */
Documentation.prototype.generateReport = function (format, filename) {
	return new Promise((resolve, reject) => {
		let args = [ path.join(DOC_DIR, 'docgen.js'), '-f', format, '-o', this.outputDir + path.sep ];
		if (this.hasWindows && format !== 'typescript') {
			args = args.concat([
				'-a', path.join(ROOT_DIR, 'windows', 'doc', 'Titanium'),
				'-a', path.join(ROOT_DIR, 'windows', 'doc', 'WindowsOnly'),
				'-a', path.join(ROOT_DIR, 'windows', 'doc', 'Modules')
			]);
		}

		console.log(`Generating ${format} report...`);

		const prc = spawn('node', args, { cwd: DOC_DIR });
		prc.stdout.on('data', data => console.log(data.toString().trim()));
		prc.stderr.on('data', data => console.log(data.toString().trim()));
		prc.on('close', code => {
			if (code !== 0) {
				return reject(`Failed to generate ${format} docs.`);
			}
			resolve(path.join(this.outputDir, filename));
		});
	});
};

/**
 * @returns {Promise<string>}
 */
Documentation.prototype.generateParityReport = function () {
	return this.generateReport('parity', 'parity.html');
};

/**
 * @returns {Promise<string>}
 */
Documentation.prototype.generateJSCA = function () {
	return this.generateReport('jsca', 'api.jsca');
};

/**
 * @returns {Promise<string>}
 */
Documentation.prototype.generateTypeScriptTypeDefinitions = function () {
	return this.generateReport('typescript', 'index.d.ts');
};

/**
 * @returns {Promise<string[]>}
 */
Documentation.prototype.generate = function () {
	// FIXME try to avoid rewriting if contents haven't changed (to avoid later copies in build)
	// maybe we can compare timestamps between apidocs/generator and output file?
	// Maybe write the generation as some sort of gulp plugin?
	return Promise.all([
		this.generateParityReport(),
		this.generateJSCA(),
		this.generateTypeScriptTypeDefinitions(),
	]);
};
module.exports = Documentation;
