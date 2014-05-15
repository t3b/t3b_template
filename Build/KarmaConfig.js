/**
 * KarmaConfig
 * @description Configure the karma test runner.
 */

var config = require("./Config"),
	javascriptSources = config.JavaScripts.paths.devDir + "/**/*.js";

module.exports = function (karmaConfig) {
	"use strict";

	karmaConfig.set({
		basePath: "../",

		singleRun: true,
		colors: true,
		captureTimeout: 7000,
		logLevel: config.LOG_INFO,

		frameworks: ["jasmine", "requirejs"],
		plugins: ["karma-jasmine", "karma-requirejs", "karma-coverage", "karma-chrome-launcher", "karma-firefox-launcher", "karma-safari-launcher", "karma-phantomjs-launcher"],
		reporters: ["progress", "coverage"],

		preprocessors: {
			javascriptSources: "coverage",
		},

		coverageReporter: {
			reporters: [{
				type: "text-summary",
				dir: config.karma.coverageDir
			}, {
				type: "html",
				dir: config.karma.coverageDir
			}]
		},

		// List of files to load in the browser
		files: [{
			pattern: javascriptSources,
			included: false
		}, {
			pattern: config.karma.testsDir + "/Specs/**/*.js",
			included: false
		}, {
			pattern: config.karma.testsDir + "/SpecList.js",
			included: false
		}, config.karma.testsDir + "/Test-App.js"]
	});
};
