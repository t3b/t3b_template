/**
 * Grunt-Bower-Task
 * @description Bower plugin for Grunt.
 * @docs https://github.com/yatskevich/grunt-bower-task
 */

var config = require("../Config");

module.exports = {
	install: {
		options: {
			targetDir: './' + config.paths.private,
			cleanBowerDir: true
		}
	}
};
