/**
 * Grunt-Contrib-Uglify
 * @description Minify files with UglifyJS.
 * @docs https://github.com/gruntjs/grunt-contrib-uglify
 */

var config = require("../Config");

module.exports = {
	js: {
		options: {
			banner: config.bannerComment()
		},
		files: [{
			expand: true,
			cwd: config.JavaScripts.paths.devDir,
			src: [
				"**/*.js",
				"!Vendor/almond/**/*.js",
				"!Vendor/modernizr/**/*.js"
			],
			dest:  config.JavaScripts.paths.distDir
		}]
	}
};
