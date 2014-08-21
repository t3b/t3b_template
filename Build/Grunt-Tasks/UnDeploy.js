/**
 * UnDeploy task
 * Revert all changes made by the deploy task.
 */

module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('undeploy', function() {
		// Re-Compile the css with :dev options.
		grunt.task.run('compile:css:dev');

		// Generate a dev version of the Modernizr Build.
		grunt.task.run('modernizr:dev');

		// Re-Compile the JS.
		grunt.task.run('compile:js');
	});
};
