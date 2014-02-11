/**
 * UnDeploy task
 * Revert all changes made by the deploy task.
 */

module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('undeploy', function() {
		grunt.task.run(['clean:stylesheets']);
		grunt.task.run(['compass:dev']);
		grunt.task.run(['replace:dev']);
	});
};
