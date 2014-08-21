/**
 * Deploy task
 * Recompiles all .scss/.sass files with ':prod' options (Minified), creates an
 * custom Modernizr build and changes the affected paths in all Fluid Layouts.
 */

module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('deploy', function() {
		// Compile the living styleguide.
		grunt.task.run('compile:images');

		// Compile the living styleguide.
		grunt.task.run('compile:docs');

		// Compile the stylesheets.
		grunt.task.run('compile:css:deploy');

		// Compile the stylesheets.
		grunt.task.run('compile:js:deploy');

		// Generate a custom modernizr build.
		grunt.task.run('modernizr:dist');
	});
};
