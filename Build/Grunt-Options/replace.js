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
				to: '<%= config.pkg.name %>'
			}, {
				from: '<!= pkg.description !>',
				to: '<%= config.pkg.description %>'
			}, {
				from: '<!= pkg.homepage !>',
				to: '<%= config.pkg.homepage %>'
			}, {
				from: '<!= pkg.version !>',
				to: '<%= config.pkg.version %>'
			}, {
				from: '<!= pkg.author.name !>',
				to: '<%= config.pkg.author.name %>'
			}, {
				from: '<!= pkg.author.email !>',
				to: '<%= config.pkg.author.email %>'
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
