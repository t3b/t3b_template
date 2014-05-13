/**
 * Deploy task
 * Recompiles all .scss/.sass files with ':prod' options (Minified), creates an
 * custom Modernizr build and changes the affected paths in all Fluid Layouts.
 */

var fs = require("fs"),
	config = require("../Config");

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("deploy", function() {
		// Compile the living styleguide.
		grunt.task.run(["compile:images"]);

		// Compile the living styleguide.
		grunt.task.run(["compile:docs"]);

		// Compile the stylesheets.
		grunt.task.run(["css:deploy"]);

		// Optimize the projects js files a requireJS build to avoid too many http requests on the live server.
		if(!config.JavaScripts.requireJS.useSingleFileBuild || grunt.option('env') === 'travis') {
			grunt.task.run(["uglify:all"]);
		}
		grunt.task.run(["requirejs"]);

		// Generate a custom modernizr build.
		grunt.task.run(["modernizr"]);

		// Replace paths to match the build files.
		grunt.task.run(["replace:deploy"]);
	});
};
