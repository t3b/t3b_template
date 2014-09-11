var config = require('./../../Config');
var helpers = require('./../../Libary/Helpers');

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

/*
 * ToDo: Banner support
 */
var sassCompiler = function(mode) {
	mode = (!mode) ? 'dev' : mode;

	return gulp.src(config.Sass.paths.devDir + '/*.scss')
		.pipe(sass({
			unixNewlines: true,
			sourcemap: true,
			style: (mode === 'deploy') ? 'compressed' : 'expanded',
			sourcemapPath: '../../Private/Sass'
		}))
		.on('error', helpers.logError)
		.pipe(autoprefixer({
			browsers: config.project.browserSupport,
			cascade: false
		}))
		.on('error', helpers.logError)
		.pipe(gulp.dest(config.Sass.paths.distDir));
};

module.exports = sassCompiler;
