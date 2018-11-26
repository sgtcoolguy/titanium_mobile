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

/**
 * [description]
 * @param  {string} format   doc format to generate
 * @param  {string} filename [description]
 * @return {Promise<string>}          path to generated file
 */
Documentation.prototype.generateReport = async function (format, filename) {
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
		prc.stderr.on('data', data => console.error(data.toString().trim()));
		prc.on('close', code => {
			if (code !== 0) {
				return reject(new Error(`Failed to generate ${format} docs.`));
			}
			resolve(path.join(this.outputDir, filename));
		});
	});
};

Documentation.prototype.generateParityReport = function () {
	return this.generateReport('parity', 'parity.html');
};

Documentation.prototype.generateJSCA = function () {
	return this.generateReport('jsca', 'api.jsca');
};

Documentation.prototype.generateTypeScriptTypeDefinitions = function () {
	return this.generateReport('typescript', 'index.d.ts');
};

/**
 * [description]
 * @return {Promise} [description]
 */
Documentation.prototype.generate = async function () {
	await Promise.all([
		this.generateParityReport(),
		this.generateJSCA(),
		this.generateTypeScriptTypeDefinitions()
	]);
};
module.exports = Documentation;
