/**
 * Grunt-Bower-Task
 * @description Bower plugin for Grunt.
 * @docs https://github.com/yatskevich/grunt-bower-task
 */

var config = require("../Config");

module.exports = {
	all: {
		options: {
			targetDir: './' + config.paths.public,
			cleanBowerDir: true
		}
	}
};
