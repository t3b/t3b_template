/**
 * Grunt-Contrib-iImagemin
 * @description Minify PNG, JPEG and GIF images
 * @docs https://github.com/gruntjs/grunt-contrib-imagemin
 */

var config = require('../Config');

module.exports = {
	images: {
		options: {
			optimizationLevel: 5
		},
		files: [{
			expand: true,
			cwd: config.Images.devDir,
			src: ['**/*.{png,jpg,gif}'],
			dest: config.Images.distDir
		}]
	}
};
