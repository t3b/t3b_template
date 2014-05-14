/**
 * Test task.
 * Replaces all t3b_template strings and other meta-data with the data
 * specified inside the 'package.json'. (Should be run after downloading the extension).
 */

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("test", function() {
		// Replace general text-strings and paths.
		grunt.task.run("connect:karma", "karma:test");
	});
};
