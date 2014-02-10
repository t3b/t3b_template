/**
 * Grunt-Contrib-Clean
 * Cleans files and folders.
 * https://github.com/gruntjs/grunt-contrib-clean
 */

var config = require('../Config');

module.exports = {
	css: [config.paths.css + '/*.css']
};
