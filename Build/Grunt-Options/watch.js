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
	sass: {
		files: [config.Sass.sassDir + '/**/*.scss'],
		tasks: ['compass:dev']
	},
	js: {
		files: ['<%= jshint.files %>'],
		tasks: ['jshint']
	}
};
