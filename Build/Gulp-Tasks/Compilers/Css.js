/**
 * CompileSass task.
 * (Re-)Compiles all Sass stylesheets.
 */

var config = require('./../../Config');
var helpers = require('./../../Libary/Helpers');

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function () {
	/* ToDo:
	 * - Sourcemaps support.
	 * - Mode support
	 */
    gulp.src(config.Sass.paths.devDir + '/*.scss')
        .pipe(sass())
        .on('error', helpers.logError)
        .pipe(autoprefixer({
            browsers: config.project.browserSupport,
            cascade: false
        }))
        .pipe(gulp.dest(config.Sass.paths.distDir));
}
