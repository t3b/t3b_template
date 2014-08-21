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
				'ext_emconf.php',
				'ext_tables.php',
				'Configuration/**/*.ts',
				'Configuration/**/*.txt',
				'Build/Templates/Kss-Node/index.html',
				config.paths.private + '/Elements/**/*.html',
				config.paths.private + '/Layouts/**/*.html',
				config.paths.private + '/Partials/**/*.html',
				config.paths.private + '/Templates/**/*.html',
				config.Sass.sassDir + '/**/*.scss',
				config.Sass.sassDir + '/styleguide.md'
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
				from: '<!= pkg.author.company !>',
				to: config.package.author.company
			}, {
				from: '<!= date !>',
				to: grunt.template.today('dd-mm-yyyy hh:MM')
			}]
		},
		deploy: {
			src: [config.paths.private + '/Layouts/*.html'],
			overwrite: true,
			replacements: [{
				from: config.JavaScripts.modernizr.devSourceFile,
				to: config.JavaScripts.modernizr.buildDistFile
			}]
		},
		dev: {
			src: [config.paths.private + '/Layouts/*.html'],
			overwrite: true,
			replacements: [{
				from: config.JavaScripts.modernizr.buildDistFile,
				to: config.JavaScripts.modernizr.devSourceFile
			}]
		}
	};
};
