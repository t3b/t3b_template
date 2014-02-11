/**
 * Grunt-Contrib-Compass
 * @description Compiles .scss/.sass files to .css using Compass.
 * @docs https://github.com/gruntjs/grunt-contrib-compass
 */

var config = require('../Config');

module.exports = {
	options: {
		// Specify the config.rb filepath
		config: config.paths.sass + '/Config.rb',

		// Override Configuration paths as all grunt paths are relative to the Gruntfile
		sassDir: config.paths.sass,
		cssDir: config.paths.css,
		imagesDir: config.paths.images,
		javascriptsDir: config.paths.privateJs
	},
	dev: {
		options: {
			outputStyle: 'compact',
			environment: 'development'
		}
	},
	prod: {
		options: {
			outputStyle: 'compressed',
			environment: 'production'
		}
	}
};
