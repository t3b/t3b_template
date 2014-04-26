/**
 * Docs task.
 * Create the extension documentation/styleguide.
 */

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("docs", function() {
		// Replace general text-strings and paths.
		grunt.task.run("sass:dev");

		// Create the living CSS styleguide.
		grunt.task.run(["styleguide"]);
	});
};
