/**
 * Test task.
 * Run JS unit tests via Jasmine & Karma, and create coverage reports for all browsers.
 */

module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('test', function() {
		// Pre-Linting and start off an webserver.
		grunt.task.run(['jshint', 'connect:karma']);

		// Depending on the env, we start different browsers.
		if(grunt.option('env') !== 'travis') {
			grunt.task.run('karma:test']);
		} else {
			grunt.task.run('karma:ci']);
		}
	});
};
