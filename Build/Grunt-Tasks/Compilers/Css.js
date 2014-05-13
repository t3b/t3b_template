/**
 * CompileSass task.
 * (Re-)Compiles all Sass stylesheets.
 */

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("css", function() {
		// Replace general text-strings and paths.
		grunt.task.run("sass:dev");

		// Prefix the (re-)compiled stylesheets.
		grunt.task.run("autoprefixer:main");
	});
};

