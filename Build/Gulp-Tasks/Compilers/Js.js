/**
 * Compile:JS task.
 * Uglify and merge all javascript files in 'Public/Javascripts/Sources/'.
 */

var config = require('./../../Config');
var helpers = require('./../../Libary/Helpers');

var gulp = require('gulp');
var browserify = require('browserify');

module.exports = function () {
	/* ToDo:
	 * -
	 */
    gulp.src(config.JavaScripts.paths.devDir + '/App.js')
        .pipe(browserify({
        	debug: true,
        	externals: ['jquery']
        }))
        .on('error', helpers.logError)
        .pipe(gulp.dest(config.JavaScripts.paths.distDir))
}
