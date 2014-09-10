/**
 * Compile:documentation task.
 * Create the extension documentation/styleguide.
 */

var config = require('./../../Config');
var helpers = require('./../../Libary/Helpers');

var gulp = require('gulp');
var kss = require('kss');
var shell = require('gulp-shell');

module.exports = {
	js: function () {
		return gulp.src('*.js', {read: false})
			.pipe(shell([
				'./node_modules/.bin/jsdoc' + // The locally installed jsDoc binary.
				' -c  ./Build/JSDocConfig.json ' + // The path to a JSDoc configuration file.
				' -t ./node_modules/ink-docstrap/template ' + // The path to the template to use for generating output.
				' -d ./Documentation/Javascripts/Documentation ' + // The path to the output folder for the generated documentation.
				' -r ' + config.JavaScripts.paths.devDir // Recurse into subdirectories when scanning for source files.
			]));
	},
	css: function() {
		/*
		 * ToDo: Copy all css related images/Assets to the docs folder as well.
		 */
		return gulp.src('*.js', {read: false})
			.pipe(shell([
				'./node_modules/.bin/kss-node ' + // The locally installed kss-node binary.
				config.Sass.paths.distDir + // Direcotry to scan for css files which get parsed.
				' Documentation/Stylesheets ' + // The path to the output folder of the generated documentation.
				'--template node_modules/kss-node_glaciertheme/Theme ' + // The path to the template to use.
				' -c Resources/Public/Stylesheets/Main.css' // Css files which gets included into the theme.
			]));
	}
}
