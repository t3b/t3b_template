/**
 * Grunt-Modernizr
 * @description Crawls through source files, gathers up references to Modernizr tests and outputs a clean Modernizr build.
 * @docs https://github.com/Modernizr/grunt-modernizr
 */

var config = require('../Config');

module.exports = {
	devFile: config.JavaScripts.devDir + '/Libaries/Modernizr/modernizr.js',
	outputFile: config.JavaScripts.distDir + '/Libaries/Modernizr-Custom.js',

	// Based on default settings on http://modernizr.com/download/
	extra: {
		shiv: true,
		printshiv: false,
		load: true,
		mq: false,
		cssclasses: true
	},
	// Based on default settings on http://modernizr.com/download/
	extensibility: {
		addtest: false,
		prefixed: false,
		teststyles: false,
		testprops: false,
		testallprops: false,
		hasevents: false,
		prefixes: false,
		domprefixes: false
	},
	files: [
		'**/*.{js,css,scss}',
		'!node_modules/**/*',
		'!Gruntfile.js',
		'!' + config.JavaScripts.devDir + '/Libaries/**/*',
		'!' + config.JavaScripts.distDir + '/Libaries/**/*'
	]
};
