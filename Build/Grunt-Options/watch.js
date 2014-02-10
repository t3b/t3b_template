/**
 * Grunt-Contrib-Watch
 * Run tasks whenever watched files change.
 * https://github.com/gruntjs/grunt-contrib-watch
 */

var config = require('../Config');

module.exports = {
	options: {
		nospawn: true
	},
	sass: {
		files: [config.paths.sass + '/**/*.scss'],
		tasks: ['compass:dev']
	},
	js: {
		files: ['<%= jshint.files %>'],
		tasks: ['jshint']
	}
};
