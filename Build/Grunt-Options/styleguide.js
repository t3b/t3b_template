/**
 * Grunt-Styleguide
 * @description Universal CSS styleguide generator for grunt. Easily integrate Styledocco or KSS styleguide generation into your development workflow.
 * @docs https://github.com/indieisaconcept/grunt-styleguide
 */

var config = require('../Config');

module.exports = {
	options: {
		template: {
			src: 'node_modules/kss-node_glaciertheme/Theme'
		},
		framework: {
			name: 'kss'
		}
	},
	css: {
		files: [{
			'Documentation': [config.Sass.cssDir + '/Main.css']
		}]
	}
};
