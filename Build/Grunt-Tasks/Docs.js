/**
 * Docs task.
 * Create the extension documentation/styleguide.
 */

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("docs", function() {
		// Create the living CSS styleguide.
		grunt.task.run(["styleguide"]);

		// Prefix the docs stylesheet.
		grunt.task.run("autoprefixer:styleguide");

		// Replace general text-strings and paths.
		grunt.task.run("css");
	});
};
