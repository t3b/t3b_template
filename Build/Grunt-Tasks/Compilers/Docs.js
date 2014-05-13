/**
 * Compile:documentation task.
 * Create the extension documentation/styleguide.
 */

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("compile:docs", function() {
		// Create the living CSS styleguide.
		grunt.task.run(["styleguide"]);

		// Prefix the docs stylesheet.
		grunt.task.run("autoprefixer:styleguide");

		// Compile the new stylesheets.
		grunt.task.run("css:dev");
	});
};
