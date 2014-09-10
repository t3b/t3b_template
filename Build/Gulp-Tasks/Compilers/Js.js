/**
 * Compile:JS task.
 * Uglify and merge all javascript files in 'Public/Javascripts/Sources/'.
 */

var config = require('./../../Config');
var helpers = require('./../../Libary/Helpers');

var gulp = require('gulp');
var browserify = require('browserify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');

var externals = config.JavaScripts.vendorFiles;


module.exports = {
	vendor: function() {
		var b = browserify();

		if(externals.length > 0) {
			externals.forEach(function(file) {
				b.require(file);
			});
		}

		return b.bundle()
			.pipe(source(config.JavaScripts.paths.devDir + '/Vendor.js'))
			.pipe(rename({dirname: ''}))
			.pipe(gulp.dest(config.JavaScripts.paths.distDir));
	},
	app: function() {
		var b = browserify({
			entries: './' + config.JavaScripts.paths.devDir + '/App.js'
		});

		if(externals.length > 0) {
			externals.forEach(function(file) {
				b.external(file);
			});
		}

		return b.bundle()
			.on('error', helpers.logError)
			.pipe(source(config.JavaScripts.paths.devDir + '/App.js'))
			.on('error', helpers.logError)
			.pipe(rename({dirname: ''}))
			.pipe(gulp.dest(config.JavaScripts.paths.distDir));
	}
}


