/**
 * Compile:images task.
 * Copy all images into a temp folder,
 * compress them and move them back to their original location.
 */

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("compile:images", function() {
		// Prevent 'imagemin' from executing if the build gets tested on travis to suppress errors.
		if(grunt.option('env') !== 'travis') {
			grunt.task.run(["copy:imagesDir", "imagemin", "clean:imagesTempDir"]);
		}
	});
};

