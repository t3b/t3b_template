/**
 * Grunt-Replace
 * @description Replace inline patterns with variables.
 * @docs https://npmjs.org/package/grunt-replace
 */

var config = require('../Config');

module.exports = {
	init: {
		src: [
			'**/*.php',
			'**/*.txt',
			'**/*.ts',
			'**/*.html',
			'**/*.scss',
			'!node_modules/**/*',
			'!' + config.JavaScripts.devDir + '/Libaries/**/*',
			'!' + config.JavaScripts.distDir + '/Libaries/**/*'
		],
		overwrite: true,
		replacements: [{
			from: '<!= pkg.name !>',
			to: '<%= pkg.name %>'
		}, {
			from: '<!= pkg.description !>',
			to: '<%= pkg.description %>'
		}, {
			from: '<!= pkg.homepage !>',
			to: '<%= pkg.homepage %>'
		}, {
			from: '<!= pkg.version !>',
			to: '<%= pkg.version %>'
		}, {
			from: '<!= pkg.author.name !>',
			to: '<%= pkg.author.name %>'
		}, {
			from: '<!= pkg.author.email !>',
			to: '<%= pkg.author.email %>'
		}, {
			from: '<!= date !>',
			to: '<%= currentDate %>'
		}]
	},
	deploy: {
		src: [config.paths.private + '/Layouts/*.html'],
		overwrite: true,
		replacements: [{
			from: '<%= modernizr.devFile %>',
			to: '<%= modernizr.outputFile %>'
		}]
	},
	dev: {
		src: [config.paths.private + '/Layouts/*.html'],
		overwrite: true,
		replacements: [{
			from: '<%= modernizr.outputFile %>',
			to: '<%= modernizr.devFile %>'
		}]
	}
};
