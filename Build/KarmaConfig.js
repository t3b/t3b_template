/**
 * KarmaConfig
 * @description Configure the karma test runner.
 */

var config = require('./Config'),
	javascriptSources = config.JavaScripts.paths.devDir + '/**/*.js';

module.exports = function (karmaConfig) {
	'use strict';

	karmaConfig.set({
		// base path, that will be used to resolve files and exclude
		basePath: '../',

		// frameworks to use
    	frameworks: ['jasmine', 'browserify'],

    	// Plugins to load.
		plugins: ['karma-*'],

		// list of files / patterns to load in the browser
		files: [
		  'Resources/Private/Javascripts/Tests/**/*.js'
		],

		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: ['progress', 'coverage'],

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_DISABLE,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true,

		// Browserify config (all optional)
		browserify: {
		  // extensions: ['.coffee'],
		  // ignore: [],
		  // transform: ['coffeeify'],
		  // debug: true,
		  // noParse: ['jquery'],
		  watch: true,
		},

		// Add browserify to preprocessors
		preprocessors: {
			'**/Resources/Private/Javascripts/Modules/Module.js': ['browserify', 'coverage'],
			'Resources/Private/Javascripts/Tests/**/*.js': 'browserify'
		},

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
