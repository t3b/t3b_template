/**
 * Deploy task
 * Recompiles all .scss/.sass files with ':prod' options (Minified), creates an
 * custom Modernizr build and changes the affected paths in all Fluid Layouts.
 */

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("deploy", function() {
		// Prevent 'imagemin' from executing if the build gets tested on travis to suppress errors.
		if(grunt.option('env') !== 'travis') {
			grunt.task.run(["imagemin"]);
		}

		// Remove all stylesheets to force a new compilation.
		grunt.task.run(["clean:stylesheets"]);
		grunt.task.run(["compass:deploy"]);

		// Generate a custom modernizr build.
		grunt.task.run(["modernizr"]);

		// Replace paths to match the build files.
		grunt.task.run(["replace:deploy"]);
	});
};
