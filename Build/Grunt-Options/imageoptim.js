/**
 * Grunt-ImageOptim
 * Lossless optimisation of images
 * https://github.com/gruntjs/grunt-contrib-watch
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
