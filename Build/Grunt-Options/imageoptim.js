/**
 * Grunt-ImageOptim
 * @description Lossless optimisation of images
 * @docs https://github.com/gruntjs/grunt-contrib-watch
 */

var config = require('../Config');

module.exports = {
	src: [
		config.ImagesDir
	],
	options: {
		imageAlpha: true,
		jpegMini: false,
		quitAfter: true
	}
};
