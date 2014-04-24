/**
 * UnDeploy task
 * Revert all changes made by the deploy task.
 */

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("undeploy", function() {
		// Remove all stylesheets and re-compile them with :dev options.
		grunt.task.run(["clean:stylesheets"]);
		grunt.task.run(["sass:dev", "autoprefixer"]);

		// Replace all paths pointing to the dist ressources with the dev equivalent.
		grunt.task.run(["replace:dev"]);
	});
};
