/**
 * Grunt-Contrib-copy
 * @description Copy files and folders.
 * @docs https://github.com/gruntjs/grunt-contrib-copy
 */

var config = require('../Config');

module.exports = {
	imagesDir: {
		files: [{
			expand: true,
			cwd: config.Images.distDir + '/',
			src: '**',
			dest: config.Images.tempDir
		}]
	}
};
