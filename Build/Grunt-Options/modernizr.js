/**
 * Grunt-Modernizr
 * @description Crawls through source files, gathers up references to Modernizr tests and outputs a clean Modernizr build.
 * @docs https://github.com/Modernizr/grunt-modernizr
 */

var config = require('../Config');

module.exports = {
	main: {
		devFile: config.JavaScripts.devDir + '/Libaries/Modernizr/modernizr.js',
		outputFile: config.JavaScripts.distDir + '/Libaries/Modernizr-Custom.js',

		// Based on default settings on http://modernizr.com/download/
		extra: config.Modernizr.extra,
		// Based on default settings on http://modernizr.com/download/
		extensibility: config.Modernizr.extensibility,
		tests : config.Modernizr.tests,
		customTests : config.Modernizr.customTests,
		matchCommunityTests : config.Modernizr.matchCommunityTests,
		files : {
			"src": [
				'**/*.{js,css,scss}',
				'!node_modules/**/*',
				'!Gruntfile.js',
				'!' + config.JavaScripts.devDir + '/Libaries/**/*',
				'!' + config.JavaScripts.distDir + '/Libaries/**/*'
			]
		}
	}
};
