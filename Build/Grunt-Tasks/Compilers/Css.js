/**
 * CompileSass task.
 * (Re-)Compiles all Sass stylesheets.
 */

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("compile:css", function(mode) {
		mode = (!mode) ? "dev" : mode;

		// (Re-)Compile the stylesheets.
		grunt.task.run("sass:" + mode);

		// Prefix the (re-)compiled stylesheets.
		grunt.task.run("autoprefixer:css");
	});
};

