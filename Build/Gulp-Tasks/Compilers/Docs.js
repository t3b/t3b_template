/**
 * Compile:documentation task.
 * Create the extension documentation/styleguide.
 */

var config = require('./../../Config');
var helpers = require('./../../Libary/Helpers');

var gulp = require('gulp');
var jsdoc = require("gulp-jsdoc");
var kss = require('gulp-kss');

module.exports = function () {
	/* ToDo:
	 * -
	 */
	gulp.src(config.JavaScripts.paths.devDir + '/**/*.js')
		.pipe(jsdoc('Documentation/Javascripts/Documentation'));
}
