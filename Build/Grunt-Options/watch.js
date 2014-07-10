/**
 * Grunt-Contrib-Watch
 * @description Run tasks whenever watched files change.
 * @docs https://github.com/gruntjs/grunt-contrib-watch
 */

var config = require('../Config');

module.exports = {
	options: {
		nospawn: true
	},
	css: {
		files: [config.Sass.sassDir + '/**/*.scss'],
		tasks: ['compile:css']
	},
	jshint: {
		files: ['<%= jshint.files %>'],
		tasks: ['jshint']
	},
	js: {
		files: [config.JavaScripts.paths.devDir + '/**/*.js'],
		tasks: ['compile:js']
	}
};
