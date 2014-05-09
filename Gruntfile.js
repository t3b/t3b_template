module.exports = function(grunt) {
	"use strict";

	// Display the execution time of grunt tasks
	require("time-grunt")(grunt);

	// Load all grunt-tasks in 'Build/Grunt-Options'.
	var gruntOptionsObj = require("load-grunt-configs")(grunt, {
		"config" : {
			src: "Build/Grunt-Options/*.js"
		}
	});
	grunt.initConfig(gruntOptionsObj);

	// Load all grunt-plugins that are specified in the 'package.json' file.
	require('jit-grunt')(grunt, {
		replace: 'grunt-text-replace',
		cssmetrics: 'grunt-css-metrics',
		bower: 'grunt-bower-task'
	});


	/**
	 * Default grunt task.
	 * Compiles all .scss/.sass files with ':dev' options and
	 * validates all js-files inside Resources/Private/Javascripts with JSHint.
	 */
	grunt.registerTask("default", ["sass:dev", "jshint"]);


	/**
	 * Travis CI task
	 * Test all specified grunt tasks.
	 */
	grunt.registerTask("travis", ["init", "replace:init", "jshint", "deploy", "undeploy"]);


	/**
	 * Load custom tasks
	 * Load all Grunt-Tasks inside the 'Build/Grunt-Tasks' dir.
	 */
	grunt.loadTasks("Build/Grunt-Tasks");
};
