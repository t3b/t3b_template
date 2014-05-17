/**
 * Compile:documentation task.
 * Create the extension documentation/styleguide.
 */

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("compile:docs", function() {
		// Compile the new stylesheets.
		grunt.task.run("compile:css:dev");

		// Create the living CSS styleguide.
		grunt.task.run("styleguide");
	});
};
