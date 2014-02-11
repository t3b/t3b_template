/**
 * Grunt-Modernizr
 * @description Crawls through source files, gathers up references to Modernizr tests and outputs a clean Modernizr build.
 * @docs https://github.com/Modernizr/grunt-modernizr
 */

var config = require("../Config"),
		modernizrConfig = require("../ModernizrConfig");

module.exports = {
	"main" : {
		"devFile" : config.JavaScripts.devDir + "/Libaries/Modernizr/modernizr.js",
		"outputFile" : config.JavaScripts.distDir + "/Libaries/Modernizr-Custom.js",

		// Based on default settings on http://modernizr.com/download/
		"extra" : modernizrConfig.extra,
		// Based on default settings on http://modernizr.com/download/
		"extensibility" : modernizrConfig.extensibility,
		"tests" : modernizrConfig.tests,
		"customTests" : modernizrConfig.customTests,
		"matchCommunityTests" : modernizrConfig.matchCommunityTests,
		"files" : {
			"src" : [
				"**/*.{js,css,scss}",
				"!node_modules/**/*",
				"!Gruntfile.js",
				"!" + config.JavaScripts.devDir + "/Libaries/**/*",
				"!" + config.JavaScripts.distDir + "/Libaries/**/*"
			]
		}
	}
};
