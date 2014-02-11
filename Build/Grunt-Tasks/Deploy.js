/**
 * Deploy task
 * Recompiles all .scss/.sass files with ':prod' options (Minified), creates an
 * custom Modernizr build and changes the affected paths in all Fluid Layouts.
 */

module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('deploy', function() {
		grunt.task.run(['clean:css']);
		grunt.task.run(['compass:prod']);
		grunt.task.run(['modernizr']);
		grunt.task.run(['replace:deploy']);
	});
};