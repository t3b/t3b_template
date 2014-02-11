/**
 * Grunt-Contrib-Compass
 * @description Compiles .scss/.sass files to .css using Compass.
 * @docs https://github.com/gruntjs/grunt-contrib-compass
 */

var config = require('../Config');

module.exports = {
	options: {
		// Specify the config.rb filepath
		config: config.Sass.sassDir + '/Config.rb',

		// Override Configuration paths as all grunt paths are relative to the Gruntfile
		sassDir: config.Sass.sassDir,
		cssDir: config.Sass.cssDir,
		imagesDir: config.Images.devDir,
		javascriptsDir: config.JavaScripts.devDir
	},
	dev: {
		options: {
			outputStyle: 'compact',
			environment: 'development'
		}
	},
	deploy: {
		options: {
			imagesDir: config.Images.distDir,
			outputStyle: 'compressed',
			environment: 'production'
		}
	}
};
