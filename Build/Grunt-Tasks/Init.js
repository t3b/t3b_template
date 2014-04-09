/**
 * Initialize task.
 * Replaces all t3b_template strings and other meta-data with the data
 * specified inside the 'package.json'. (Should be run after downloading the extension).
 */

var fs = require('fs'),
	config = require("../Config"),
	helpers = require("../Libary/Helpers");

module.exports = function(grunt) {
	"use strict";

	grunt.registerTask("init", function() {
		// Replace general text-strings and paths.
		grunt.task.run("replace:preInit");

		if (!config.packageIsDefault) {
			/*
			 * If the package.json contents are edited:
			 *		=> #1: replace all '<!=  !>' strings and set up the git hooks.
			 *		=> #1: remove the default git history.
			 *		=> #2: Copy a bare version of the extensions '.gitignore' into the root.
			 *		=> #3: Remove other files which aren't suitable for customized extensions.
			 */
			grunt.task.run(["replace:init", "clean:gitFolder"]); // #1
			helpers.copyFile("Build/Templates/.gitignore", ".gitignore"); // #2
			helpers.deleteFiles([".travis.yml", "CHANGELOG.md", "CONTRIBUTORS.md", "README.md"]); // #3
		} else {
			/*
			 * If the package.json contents are defaults:
			 *		=> Remove any previous set git hooks.
			 *		=> Copy the git hooks as they are not present by default.
			 */
			grunt.task.run(["shell:deleteGitHooks", "shell:hookUpGit"]);
		}

		// Create the base Stylesheet to prevent errors from ext:vhs(File not found).
		if (!fs.existsSync(config.Sass.cssDir + "/Main.css")) {
			grunt.task.run(["compass:dev"]);
		}

		// Fetch all bower components.
		grunt.task.run(["bower:install"]);
	});
};
