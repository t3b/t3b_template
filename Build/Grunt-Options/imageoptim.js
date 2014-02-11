/**
 * Grunt-ImageOptim
 * @description Lossless optimisation of images
 * @docs https://github.com/gruntjs/grunt-contrib-watch
 */

var config = require('../Config');

module.exports = {
	files: [
		config.paths.images
	],
	options: {
		imageAlpha: true,
		jpegMini: false,
		quitAfter: true
	}
};
