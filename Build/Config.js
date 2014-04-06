/**
 * Config
 * @description Configure grunt tasks & options.
 */

var ConfigCreator = function() {
	"use strict";

	this.defaultName = "t3b_template",
	this.package = require("../package"),
	this.paths = {
		"private" : "Resources/Private",
		"public" : "Resources/Public",
	};
	this.Sass = {
		"sassDir" : this.paths.private + "/Sass",
		"cssDir" : this.paths.public + "/Stylesheets"
	};
	this.JavaScripts = {};
	this.JavaScripts.paths = {
		"devDir" : this.paths.private + "/Javascripts",
		"distDir" : this.paths.public + "/Javascripts"
	};
	this.JavaScripts.requireJS = {
		"config" : "Main",
		"libSourceFile" : "Libaries/requirejs/require", // Relative to the "config" file.
		"almondSourceFile" : "Libaries/almond/almond", // Relative to the "config" file.
		"compileDistFile" : this.JavaScripts.paths.distDir + "/Main.min.js",
		"useAlmondOnBuild" : true,
		"removeLoggingStatements" : true
	};
	this.JavaScripts.jsHint = {
		"config" : "Build/JSHintConfig.json",
		"files" : [
			"Gruntfile.js",
			"Build/**/*.js",
			this.JavaScripts.paths.devDir + "/**/*.js",
			"!" + this.JavaScripts.paths.devDir + "/Libaries/**/*",
			"!" + this.JavaScripts.paths.distDir + "/Libaries/**/*"
		]
	};
	this.JavaScripts.modernizr = {
		"devSourceFile" : this.JavaScripts.paths.devDir + "/Libaries/modernizr/modernizr.js",
		"buildDistFile" : this.JavaScripts.paths.distDir + "/Libaries/Modernizr-Custom.js",
		"files" : {
			"src" : [
				"**/*.{js,css,scss}",
				"!node_modules/**/*",
				"!Gruntfile.js",
				"!" + this.JavaScripts.paths.devDir + "/Libaries/**/*",
				"!" + this.JavaScripts.paths.distDir + "/Libaries/**/*"
			]
		}
	};
	this.Images = {
		"devDir" : this.paths.private + "/Images",
		"distDir" : this.paths.public + "/Images",
		"optimizationLevel" : 5
	};
	this.packageIsDefault = this.package.name === this.defaultName; // Check if the defaults in 'package.json' are customized.
};

module.exports = new ConfigCreator();
