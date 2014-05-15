/**
 * Test task.
 * Run JS unit tests via Jasmine & Karma, and create coverage reports for all browsers.
 */

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("test", function() {
		grunt.task.run("connect:karma", "karma:test");
	});
};
