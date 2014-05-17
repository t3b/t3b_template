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

		singleRun: true,
		colors: true,
		captureTimeout: 12000,
		logLevel: config.LOG_INFO,
		autoWatch: false,

		frameworks: ['jasmine', 'requirejs'],
		plugins: ['karma-jasmine', 'karma-requirejs', 'karma-coverage', 'karma-chrome-launcher', 'karma-firefox-launcher', 'karma-safari-launcher', 'karma-phantomjs-launcher'],
		reporters: ['progress', 'coverage'],

		preprocessors: {
			'**/Resources/Public/Javascripts/Sources/**/*.js': 'coverage',
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

		// List of files to load in the browser 'Resources/Public/Javascripts/Tests
		files: [{
			pattern: 'Resources/Public/Javascripts/Sources/**/*.js',
			included: false
		}, {
			pattern: 'Resources/Public/Javascripts/Tests/Specs/**/*.js',
			included: false
		}, {
			pattern: 'Resources/Public/Javascripts/Tests/SpecList.js',
			included: false
		}, 'Resources/Public/Javascripts/Tests/Test-App.js']
	});
};
