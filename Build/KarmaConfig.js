/**
 * KarmaConfig
 * @description Configure the karma test runner.
 */

var config = require('./Config'),
	javascriptSources = config.JavaScripts.paths.devDir + '/**/*.js';

module.exports = function (karmaConfig) {
	'use strict';

	karmaConfig.set({
		basePath: '../',

		// frameworks to use
    	frameworks: ['jasmine', 'browserify'],

		plugins: ['karma-*', 'karma-jasmine', 'karma-coverage', 'karma-chrome-launcher', 'karma-firefox-launcher', 'karma-safari-launcher', 'karma-phantomjs-launcher'],


		// list of files / patterns to load in the browser
		files: [
		  'Resources/Public/Javascripts/Tests/Specs/**/*.js'
		],


		// list of files to exclude
		exclude: [

		],


		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: ['progress'],


		// web server port
		port: 9876,


		// cli runner port
		runnerPort: 9100,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_DEBUG,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['Chrome'],


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
		preprocessors: {'Resources/Public/Javascripts/Tests/Specs/**/*.js': ['browserify']}
	});
};
