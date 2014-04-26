/**
 * Grunt-Contrib-Clean
 * @description Cleans files and folders.
 * @docs https://github.com/gruntjs/grunt-contrib-clean
 */

var config = require("../Config");

module.exports = {
	options: {
		template: {
			src: 'Documentation/Private/Template'
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



