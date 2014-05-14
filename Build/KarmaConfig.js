/**
 * KarmaConfig
 * @description Configure the karma test runner.
 */

var config = require("./Config"),
	javascriptSources = config.JavaScripts.paths.devDir + "/**/*.js",
	coverageDir = config.JavaScripts.paths.testsDir + "/Coverage/";

module.exports = function (karmaConfig) {
	"use strict";

	karmaConfig.set({
		basePath: "../",

		singleRun: true,
		colors: true,
		captureTimeout: 7000,
		logLevel: karmaConfig.LOG_INFO,

		frameworks: ["jasmine", "requirejs"],
		reporters: ["progress", "coverage"],
		plugins: ["karma-jasmine", "karma-requirejs", "karma-coverage", "karma-chrome-launcher", "karma-firefox-launcher", "karma-safari-launcher", "karma-phantomjs-launcher"],

		// Generate the code coverage using Istanbul.
		preprocessors: {
			javascriptSources: 'coverage',
		},

		// Define the location of the coverage results.
		coverageReporter: {
			reporters: [{
				type: "text-summary",
				dir: coverageDir
			}, {
				type: "html",
				dir: coverageDir
			}]
		},

		// List of files to load in the browser.
		files: [{
			pattern: javascriptSources,
			included: false
		}, {
			pattern: config.JavaScripts.paths.testsDir + "/**/*.js",
			included: false
		}, config.JavaScripts.paths.testsDir + "/Test-App.js"],

		// list of files to exclude
		exclude: [
			config.JavaScripts.paths.devDir + "/App.js"
		]
	});
};

