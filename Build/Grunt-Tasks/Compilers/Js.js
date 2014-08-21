/**
 * Compile:JS task.
 * Uglify and merge all javascript files in 'Public/Javascripts/Sources/'.
 */

var config = require('../../Config');

module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('compile:js', function(mode) {
		mode = (!mode) ? 'dev' : mode;

		// Compile the projects javsscript via browserify.
		grunt.task.run('browserify:' + mode);
	});
};

