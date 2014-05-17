/**
 * Grunt-Contrib-Clean
 * @description Cleans files and folders.
 * @docs https://github.com/gruntjs/grunt-contrib-clean
 */

var config = require('../Config');

module.exports = {
	gitFolder: '.git/',
	imagesTempDir: config.Images.tempDir
};
