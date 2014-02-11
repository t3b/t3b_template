/**
 * Grunt-Replace
 * @description Replace inline patterns with variables.
 * @docs https://npmjs.org/package/grunt-replace
 */

var config = require('../Config');

module.exports = function(grunt) {
	'use strict';

	return {
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
				to: config.package.name
			}, {
				from: '<!= pkg.description !>',
				to: config.package.description
			}, {
				from: '<!= pkg.homepage !>',
				to: config.package.homepage
			}, {
				from: '<!= pkg.version !>',
				to: config.package.version
			}, {
				from: '<!= pkg.author.name !>',
				to: config.package.author.name
			}, {
				from: '<!= pkg.author.email !>',
				to: config.package.author.email
			}, {
				from: '<!= date !>',
				to: grunt.template.today('dd-mm-yyyy hh:MM')
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
};
