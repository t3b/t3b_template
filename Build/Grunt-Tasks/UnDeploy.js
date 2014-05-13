/**
 * UnDeploy task
 * Revert all changes made by the deploy task.
 */

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("undeploy", function() {
		// Re-Compile them with :dev options.
		grunt.task.run("compile:css:dev");

		// Replace all paths pointing to the dist ressources with the dev equivalent.
		grunt.task.run("replace:dev");
	});
};
