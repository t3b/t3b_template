/**
 * Compile:JS task.
 * Uglify and merge all javascript files in 'Public/Javascripts/Sources/'.
 */

var config = require("../../Config");

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("compile:js", function() {
		// Optimize all js files if the 'useSingleFileBuild' option is 'false'.
		if(!config.JavaScripts.requireJS.useSingleFileBuild || grunt.option('env') === 'travis') {
			grunt.task.run("uglify:js");
		}

		// Optimize the project via the r.js optimizer.
		grunt.task.run("requirejs");
	});
};

