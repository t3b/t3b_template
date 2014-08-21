/**
 * Grunt-Contrib-Sass
 * @description Compile Sass to CSS.
 * @docs https://github.com/gruntjs/grunt-contrib-sass
 */

var config = require('../Config');

module.exports = {
	options: {
		banner: config.project.fileBanner('Stylesheets for ' + config.package.homepage)
	},
	dev: {
		options: {
			style: 'expanded'
		},
		files: [{
			expand: true,
			cwd: config.Sass.paths.devDir,
			src: ['*.scss'],
			dest: config.Sass.paths.distDir,
			ext: '.css'
		}]
	},
	deploy: {
		options: {
			style: 'compressed',
			sourcemap: true
		},
		files: [{
			expand: true,
			cwd: config.Sass.paths.devDir,
			src: ['*.scss'],
			dest: config.Sass.paths.distDir,
			ext: '.css'
		}]
	},
};



