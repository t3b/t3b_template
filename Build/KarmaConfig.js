/**
 * KarmaConfig
 * @description Configure the karma test runner.
 */

var config = require('./Config');

module.exports = function (karmaConfig) {
	'use strict';

	karmaConfig.set({
		// Base path, that will be used to resolve files and exclude.
		basePath: '../',

		// Drameworks to use.
    	frameworks: ['jasmine', 'commonjs'],

    	// Plugins to load.
		plugins: ['karma-*'],

		// List of files / patterns to load in the browser.
		files: [
		  'Resources/Private/Javascripts/Tests/**/*.js',
		  'Resources/Private/Javascripts/Modules/**/*.js'
		],

		// Test results reporter to use.
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: ['coverage', 'dots'],

		// Enable / Disable colors in the output (reporters and logs).
		colors: true,

		// Level of logging.
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: karmaConfig.LOG_ERROR,

		// Enable / Disable watching file and executing tests whenever any file changes.
		autoWatch: false,

		// If browser does not capture in given timeout [ms], kill it.
		captureTimeout: 60000,

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exits.
		singleRun: true,

		// Add commonJS support and create the code coverage.
		preprocessors: {
			'Resources/Private/Javascripts/Modules/**/*.js': ['commonjs', 'coverage'],
			'Resources/Private/Javascripts/Tests/**/*.js': ['commonjs'],
		},

		// Specify the location of the coverage report.
		coverageReporter: {
			reporters: [{
				type: 'text-summary',
				dir: config.karma.coverageDir
			}, {
				type: 'html',
				dir: config.karma.coverageDir
			}]
		},
	});
};
