var helpers = require("./Build/Libary/Helpers");

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
		cssmetrics: 'grunt-css-metrics'
	});


	/**
	 * Default grunt task.
	 * Compiles all .scss/.sass files with ':dev' options and
	 * validates all js-files inside Resources/Private/Javascripts with JSHint.
	 */
	grunt.registerTask("default", function() {
		grunt.task.run(["compile:css", "jshint"]);
	});


	/**
	 * Travis CI task
	 * Test all specified grunt tasks.
	 */
	grunt.registerTask("travis", function() {
		var tasks = [],
			primaryTasks = ["init"],
			rootLevelTasks = helpers.filterDirWithFileType('./Build/Grunt-Tasks', 'js'),
			compilerTasks = helpers.filterDirWithFileType('./Build/Grunt-Tasks/Compilers', 'js'),
			secondaryTasks = [];

		// Primary tasks that should be run first.
		primaryTasks.forEach(function(task, index) {
			tasks.push(task);
		});

		// Root level tasks in './Build/Grunt-Tasks'.
		rootLevelTasks.forEach(function(item, index) {
			var taskName = item.replace('.js', '').toLowerCase();
			if(tasks.indexOf(taskName)) {
				tasks.push(taskName);
			}
		});

		// Run each compiler task standalone again.
		compilerTasks.forEach(function(item, index) {
			var taskName = 'compile:' + item.replace('.js', '').toLowerCase();
			if(tasks.indexOf(taskName)) {
				tasks.push(taskName);
			}
		});

		grunt.task.run(tasks);
	});


	/**
	 * Load custom tasks
	 * Load all Grunt-Tasks inside the 'Build/Grunt-Tasks' dir.
	 */
	grunt.loadTasks("Build/Grunt-Tasks/Compilers");
	grunt.loadTasks("Build/Grunt-Tasks");
};
