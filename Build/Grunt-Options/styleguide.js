/**
 * Grunt-Styleguide
 * @description Universal CSS styleguide generator for grunt. Easily integrate Styledocco or KSS styleguide generation into your development workflow.
 * @docs https://github.com/indieisaconcept/grunt-styleguide
 */

var config = require("../Config");

module.exports = {
	options: {
		template: {
			src: 'Build/Templates/Kss-Node'
		},
		framework: {
			name: 'kss'
		}
	},
	all: {
		files: [{
			'Documentation': config.Sass.sassDir + "/**/*.scss"
		}]
	}
};



