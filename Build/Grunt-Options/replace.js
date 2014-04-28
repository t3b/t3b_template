/**
 * Grunt-Replace
 * @description Replace inline patterns with variables.
 * @docs https://npmjs.org/package/grunt-replace
 */

var config = require("../Config"),
	deployStrings = {
		requireJSLibSourceFile: config.JavaScripts.paths.devDir + "/" + config.JavaScripts.requireJS.libSourceFile + ".js",
		requireJsAttributeDeploy: "data-main=\"typo3conf/ext/" + config.package.name + "/" + config.JavaScripts.paths.devDir + "/" + config.JavaScripts.requireJS.config + "\"",
		requireJsAttributeLive: "data-mainJs"
	};

module.exports = function(grunt) {
	"use strict";

	return {
		"preInit" : {
			"src" : [
				"bower.json"
			],
			"overwrite" : true,
			"replacements" : [{
				"from" : config.defaultName,
				"to" : config.package.name
			}]
		},
		"init" : {
			"src" : [
				"bower.json",
				"ext_emconf.php",
				"ext_tables.php",
				"Configuration/**/*.ts",
				"Configuration/**/*.txt",
				"Documentation/Private/Template/index.html",
				config.paths.private + "/Elements/**/*.html",
				config.paths.private + "/Layouts/**/*.html",
				config.paths.private + "/Partials/**/*.html",
				config.paths.private + "/Templates/**/*.html",
				config.paths.private + "/Sass/**/*.scss",
				config.paths.private + "/Sass/styleguide.md"
			],
			"overwrite" : true,
			"replacements" : [{
				"from" : "<!= pkg.name !>",
				"to" : config.package.name
			}, {
				"from" : "<!= pkg.description !>",
				"to" : config.package.description
			}, {
				"from" : "<!= pkg.homepage !>",
				"to" : config.package.homepage
			}, {
				"from" : "<!= pkg.version !>",
				"to" : config.package.version
			}, {
				"from" : "<!= pkg.author.name !>",
				"to" : config.package.author.name
			}, {
				"from" : "<!= pkg.author.email !>",
				"to" : config.package.author.email
			}, {
				"from" : "<!= pkg.author.company !>",
				"to" : config.package.author.company
			}, {
				"from" : "<!= date !>",
				"to" : grunt.template.today("dd-mm-yyyy hh:MM")
			}]
		},
		"deploy" : {
			"src" : [config.paths.private + "/Layouts/*.html"],
			"overwrite" : true,
			"replacements" : [{
				"from" : config.JavaScripts.modernizr.devSourceFile,
				"to" : config.JavaScripts.modernizr.buildDistFile
			}, {
				"from" : deployStrings.requireJSLibSourceFile,
				"to" : config.JavaScripts.requireJS.compileDistFile
			}, {
				"from" : deployStrings.requireJsAttributeDeploy,
				"to" : deployStrings.requireJsAttributeLive
			}]
		},
		"dev" : {
			"src" : [config.paths.private + "/Layouts/*.html"],
			"overwrite" : true,
			"replacements" : [{
				"from" : config.JavaScripts.modernizr.buildDistFile,
				"to" : config.JavaScripts.modernizr.devSourceFile
			}, {
				"from" : config.JavaScripts.requireJS.compileDistFile,
				"to" : deployStrings.requireJSLibSourceFile
			}, {
				"from" : deployStrings.requireJsAttributeLive,
				"to" : deployStrings.requireJsAttributeDeploy
			}]
		}
	};
};
