/**
 * Grunt-autoprefixer
 * @description Autoprefixer parses CSS and adds vendor-prefixed CSS properties using the Can I Use database.
 * @docs https://github.com/nDmitry/grunt-autoprefixer
 */

var config = require("../Config");

module.exports = {
	options: {
		browsers: config.Sass.browserSupport
	},
	css: {
		src: config.Sass.cssDir + "/*.css"
	},
	docs: {
		src: "Documentation/public/*.css"
	}
};
