var config = require('./Build/Config');

module.exports = function(grunt) {
	'use strict';

	// Display the execution time of grunt tasks
	require('time-grunt')(grunt);

	/**
	 * Load all grunt-tasks in 'Build/Grunt-Options'.
	 */
	var gruntOptionsObj = require('load-grunt-configs')(grunt, {
		config : {
			src: "Build/Grunt-Options/*.js"
		}
	});
	grunt.initConfig(gruntOptionsObj);


	/**
	 * Load all grunt-plugins that are specified in the 'package.json' file.
	 */
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


	/**
	 * Default grunt task.
	 * Compiles all .scss/.sass files with ':dev' options and
	 * validates all js-files inside Resources/Private/Javascripts with JSHint.
	 */
	grunt.registerTask('default', ['compass:dev', 'jshint']);


	/**
	 * Travis CI task
	 * Replaces all replace strings with the standard meta data stored in the package.json
	 * and tests all JS files with JSHint, this task is used by Travis CI.
	 */
	grunt.registerTask('travis', ['replace:init', 'jshint']);


	/**
	 * Load custom tasks
	 * Load all Grunt-Tasks inside the 'Build/Grunt-Tasks' dir.
	 */
	grunt.loadTasks('Build/Grunt-Tasks');
};
