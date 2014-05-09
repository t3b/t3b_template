/**
 * Grunt-Contrib-RequireJS
 * @description Optimize RequireJS projects using r.js.
 * @docs https://github.com/gruntjs/grunt-contrib-requirejs
*/

var config = require("../Config"),
	includeArray = [];

// Include the desired requireJS lib.
if(config.JavaScripts.requireJS.useSingleFileBuild) {
	if(config.JavaScripts.requireJS.useAlmondOnBuild) {
		includeArray.push(config.JavaScripts.requireJS.almondSourceFile);
	} else {
		includeArray.push(config.JavaScripts.requireJS.requireJsSourceFile);
	}
}

// The requireJS entry point/config should always be included.
includeArray.push(config.JavaScripts.requireJS.config);
console.log(includeArray)

module.exports = {
	deploy: {
		options: {
			mainConfigFile: config.JavaScripts.paths.devDir + "/" + config.JavaScripts.requireJS.config + ".js",
			include: includeArray,
			out: config.JavaScripts.requireJS.compileDistFile,

			// Include all require files in nested files.
			findNestedDependencies: true,

			// Wrap in an IIFE
			wrap: true,

			// Generate source maps for the build.
			generateSourceMaps: true,

			// Do not preserve license comments when working with source maps, incompatible.
			preserveLicenseComments: false,

			// Uglify the build with 'uglify2'.
			optimize: "uglify2",

			// Remove 'console.log(...)' statements if set to true in the grunt config.
			onBuildRead: function (moduleName, path, contents) {
				"use strict";
				if(config.JavaScripts.requireJS.removeLoggingStatements) {
					return contents.replace(/console.log(.*);/g, '');
				} else {
					return contents;
				}
			}
		}
	}
};
