/**
 * Grunt-Contrib-copy
 * @description Cleans files and folders.
 * @docs https://github.com/gruntjs/grunt-contrib-clean
 */

var config = require("../Config");

module.exports = {
	"imagesDir": {
		files: [{
			expand: true,
			cwd: config.Images.distDir + '/',
			src: "**",
			dest: config.Images.tempDir
		}]
	}
};
