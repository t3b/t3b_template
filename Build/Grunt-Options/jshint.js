/**
 * Grunt-Contrib-JSHint
 * @description Validate files with JSHint.
 * @docs https://github.com/gruntjs/grunt-contrib-jshint
 */

var config = require('../Config');

module.exports = {
	options: {
		// Environments
		browser: true,
		jquery: true,

		// Enforcing options
		camelcase: true,
		curly: true,
		devel: true,
		eqeqeq: true,
		eqnull: true,
		immed: true,
		latedef: true,
		undef: true,
		strict: true,
		newcap: true,
		noarg: true,
		expr: true,
		evil: true,
		smarttabs: true,

		// Use the stylish JSHint output
		reporter: require('jshint-stylish'),

		// Globals
		globals: {
			// Modernizr
			Modernizr: true,

			// RequireJS
			module: true,
			require: true,
			requirejs: true,
			define: true,
		}
	},
	files: [
		'Gruntfile.js',
		config.paths.prfivateJs + '/*.js',
		'!' + config.paths.privateJs + '/Libaries/**/*',
		'!' + config.paths.publicJs + '/Libaries/**/*'
	]
};
