/**
 * Config
 * @description Configure grunt tasks & options.
 */

var ConfigCreator = function() {
	"use strict";

	// Contents of the package.json.
	this.package = require("../package"),


	// General Paths/Structure of the extension.
	this.paths = {
		"private" : "Resources/Private",
		"public" : "Resources/Public",
	};
	this.Sass = {
		"sassDir" : this.paths.private + "/Sass",
		"cssDir" : this.paths.public + "/Stylesheets",
		"browserSupport" : ["last 2 version", "ie 8", "ie 9"] // Browsers which to support, and to prefix the CSS rules for.
	};
	this.JavaScripts = {};
	this.JavaScripts.paths = {
		"devDir" : this.paths.private + "/Javascripts",
		"distDir" : this.paths.public + "/Javascripts"
	};


	// RequireJS settings.
	this.JavaScripts.requireJS = {
		"config" : "Main",
		"libSourceFile" : "Libaries/requirejs/require", // Relative to the "config" file.
		"almondSourceFile" : "Libaries/almond/almond", // Relative to the "config" file.
		"compileDistFile" : this.JavaScripts.paths.distDir + "/Main.min.js",
		"useAlmondOnBuild" : true,
		"removeLoggingStatements" : true
	};


	// JSHint settings.
	this.JavaScripts.jsHint = {
		"config" : "Build/JSHintConfig.json",
		"files" : [
			"Gruntfile.js",
			"Build/**/*.js",
			"Documentation/Private/Template/Public/styleguide.js",
			this.JavaScripts.paths.devDir + "/**/*.js",
			"!" + this.JavaScripts.paths.devDir + "/Libaries/**/*",
			"!" + this.JavaScripts.paths.distDir + "/Libaries/**/*"
		]
	};


	// Modernizr settings.
	this.JavaScripts.modernizr = {
		"devSourceFile" : this.JavaScripts.paths.devDir + "/Libaries/modernizr/modernizr.js",
		"buildDistFile" : this.JavaScripts.paths.distDir + "/Libaries/Modernizr-Custom.js",
		"files" : {
			"src" : [
				"**/*.{js,css,scss}",
				"!node_modules/**/*",
				"!Gruntfile.js",
				"!Build/**/*",
				"!" + this.JavaScripts.paths.devDir + "/Libaries/**/*",
				"!" + this.JavaScripts.paths.distDir + "/Libaries/**/*"
			]
		}
	};


	// Image compression settings.
	this.Images = {
		"tempDir" : this.paths.public + "/tempImagesDir",
		"distDir" : this.paths.public + "/Images",
		"optimizationLevel" : 5
	};
};

module.exports = new ConfigCreator();
