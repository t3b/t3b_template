/**
 * Compile:JS task.
 * Uglify and merge all javascript files in 'Public/Javascripts/Sources/'.
 */

var config = require('./../../Config');
var helpers = require('./../../Libary/Helpers');
var externals = config.JavaScripts.vendorFiles;

var gulp = require('gulp');
var browserify = require('browserify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');

module.exports = {
	vendor: function() {
		// Create the browserify instance.
		var b = browserify();

		// If the external array has items, require each of them into the vendor bundle.
		if(externals.length > 0) {
			externals.forEach(function(file) {
				b.require(file);
			});
		}

		// Compile the bundle.
		return b.bundle()
			.pipe(source(config.JavaScripts.paths.devDir + '/Vendor.js'))
			.pipe(rename({dirname: ''}))
			.pipe(gulp.dest(config.JavaScripts.paths.distDir));
	},
	app: function(mode) {
		// Create the browserify instance and set the entry point to the main app file.
		var b = browserify({
			entries: './' + config.JavaScripts.paths.devDir + '/App.js'
		});

		if(mode === 'deploy') {
			b.transform(['stripify']);
			b.transform(['uglifyify']);
		}

		// If the external array has items, exclude them from this bundle.
		if(externals.length > 0) {
			externals.forEach(function(file) {
				b.external(file);
			});
		}

		// Compile the bundle.
		return b.bundle()
			.on('error', helpers.logError)
			.pipe(source(config.JavaScripts.paths.devDir + '/App.js'))
			.on('error', helpers.logError)
			.pipe(rename({dirname: ''}))
			.pipe(gulp.dest(config.JavaScripts.paths.distDir));
	}
}
