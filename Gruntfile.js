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
	 * Initialize task.
	 * Replaces all t3b_template strings and other meta-data with the data
	 * specified inside the 'package.json'. (Should be run after downloading the extension).
	 */
	grunt.registerTask('init', function() {
		// Copy the git hooks as they are not present by default.
		grunt.task.run(['shell:hookUpGit']);

		// Check if the package.json contents are defaults; If 'false' replace all '<!=  !>' strings and set up the git hooks.
		if (!config.packageIsDefault) {
			grunt.task.run(['replace:init']);
		}

		// Create the base Stylesheet to prevent errors from ext:vhs(File not found).
		grunt.task.run(['compass:dev']);
	});


	/**
	 * Deploy task
	 * Recompiles all .scss/.sass files with ':prod' options (Minified), creates an
	 * custom Modernizr build and changes the affected paths in all Fluid Layouts.
	 */
	grunt.registerTask('deploy', ['clean:css', 'compass:prod', 'modernizr', 'replace:deploy']);


	/**
	 * UnDeploy task
	 * Revert all changes made by the deploy task.
	 */
	grunt.registerTask('undeploy', ['clean:css', 'compass:dev', 'replace:dev']);


	/**
	 * Travis CI task
	 * Replaces all replace strings with the standard meta data stored in the package.json
	 * and tests all JS files with JSHint, this task is used by Travis CI.
	 */
	grunt.registerTask('travis', ['replace:init', 'jshint']);
};
