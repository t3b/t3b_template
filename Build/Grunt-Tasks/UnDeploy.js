/**
 * UnDeploy task
 * Revert all changes made by the deploy task.
 */

module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('undeploy', function() {
		grunt.task.run(['clean:css']);
		grunt.task.run(['compass:dev']);
		grunt.task.run(['replace:dev']);
	});
};