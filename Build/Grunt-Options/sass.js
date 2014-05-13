/**
 * Grunt-Contrib-Sass
 * @description Compile Sass to CSS.
 * @docs https://github.com/gruntjs/grunt-contrib-sass
 */

var config = require("../Config");

module.exports = {
	options: {
		banner: config.bannerComment('Stylesheets for ' + config.package.homepage)
	},
	dev: {
		options: {
			style: "expanded"
		},
		files: [{
			expand: true,
			cwd: config.Sass.sassDir,
			src: ["*.scss"],
			dest: config.Sass.cssDir,
			ext: ".css"
		}]
	},
	deploy: {
		options: {
			style: "compressed",
			sourcemap: true
		},
		files: [{
			expand: true,
			cwd: config.Sass.sassDir,
			src: ["*.scss"],
			dest: config.Sass.cssDir,
			ext: ".css"
		}]
	},
};



