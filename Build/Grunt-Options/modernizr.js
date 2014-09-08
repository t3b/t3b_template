/**
 * Grunt-Modernizr
 * @description Crawls through source files, gathers up references to Modernizr tests and outputs a clean Modernizr build.
 * @docs https://github.com/Modernizr/grunt-modernizr
 */

var config = require('../Config'),
	modernizrConfig = require('../ModernizrConfig'),
	modernizrSourceFile = 'node_modules/modernizr/modernizr.js';

module.exports = {
	dev: {
		devFile: modernizrSourceFile,
		outputFile: config.JavaScripts.paths.distDir + '/Vendor/Modernizr.js',
		files: {
			src: ['node_modules/modernizr/**/*.js']
		}
	},
	deploy: {
		devFile: modernizrSourceFile,
		outputFile: config.JavaScripts.paths.distDir + '/Vendor/Modernizr.js',
		files: {
			src: [
				config.Sass.paths.devDir + '/**/*.scss',
				config.JavaScripts.paths.devDir + '/**/*.js',
				'!' + config.JavaScripts.paths.devDir + '/Vendor/**/*',
			]
		},

		extra: modernizrConfig.extra,
		extensibility: modernizrConfig.extensibility,
		tests: modernizrConfig.tests,
		customTests: modernizrConfig.customTests,
		matchCommunityTests: modernizrConfig.matchCommunityTests
	}
};
