// Helpers and config
var config = require('./Build/Config');
var externals = config.JavaScripts.vendorFiles;
var helpers = require('./Build/Libary/Helpers');

// Gulp & Gulp plugins
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var kss = require('kss');
var shell = require('gulp-shell');
var browserify = require('browserify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');



/**
 * Compiler
 * @constructor
 */
var Compiler = function() {};

/**
 * CSS compiler
 * @description Compile the Sass files of this extension into plain CSS.
 * @param mode {string} The mode in which this script should run, possible values are 'dev' || 'deploy'.
 * @returns {Compiler}
 */
Compiler.prototype.css = function(mode) {
	mode = mode || 'dev';

	gulp.src(config.Sass.paths.devDir + '/*.scss')
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

    return this;
};

/**
 * Vendor JS compiler
 * @description Compiles a separate browserify bundle which has a longer cache period.
 * @param mode {string} The mode in which this script should run, possible values are 'dev' || 'deploy'.
 * @returns {Compiler}
 */
Compiler.prototype.jsVendor = function(mode) {
    mode = mode || 'dev';

	// Create the browserify instance.
	var b = browserify();

	// If the external array has items, require each of them into the vendor bundle.
	if(externals.length > 0) {
		externals.forEach(function(file) {
			b.require(file);
		});
	}

	// Compile the bundle.
	b.bundle()
		.on('error', helpers.logError)
		.pipe(source(config.JavaScripts.paths.devDir + '/Vendor.js'))
		.on('error', helpers.logError)
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest(config.JavaScripts.paths.distDir));

    return this;
};

/**
 * Main JS compiler
 * @description Compiles the main JS bundle.
 * @param mode {string} The mode in which this script should run, possible values are 'dev' || 'deploy'.
 * @returns {Compiler}
 */
Compiler.prototype.jsMain = function(mode) {
    mode = mode || 'dev';

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
    b.bundle()
        .on('error', helpers.logError)
        .pipe(source(config.JavaScripts.paths.devDir + '/App.js'))
        .on('error', helpers.logError)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(config.JavaScripts.paths.distDir));

    return this;
};

/**
 * Docs compiler
 * @description Compiles the comment based documentation of JS and Sass.
 * @returns {Compiler}
 */
Compiler.prototype.docs = function () {
    gulp.src('*.js', {read: false})
        .pipe(shell([
            './node_modules/.bin/jsdoc' + // The locally installed jsDoc binary.
                ' -c  ./Build/JSDocConfig.json ' + // The path to a JSDoc configuration file.
                ' -t ./node_modules/ink-docstrap/template ' + // The path to the template to use for generating output.
                ' -d ./Documentation/Javascripts/Documentation ' + // The path to the output folder for the generated documentation.
                ' -r ' + config.JavaScripts.paths.devDir // Recurse into subdirectories when scanning for source files.
        ]))
        .pipe(shell([
            './node_modules/.bin/kss-node ' + // The locally installed kss-node binary.
                config.Sass.paths.distDir + // Direcotry to scan for css files which get parsed.
                ' Documentation/Stylesheets ' + // The path to the output folder of the generated documentation.
                '--template node_modules/kss-node_glaciertheme/Theme ' + // The path to the template to use.
                ' -c Resources/Public/Stylesheets/Main.css' // Css files which gets included into the theme.
        ]));

    return this;
};



/**
 * Validator
 * @constructor
 */
var Validator = function() {};

/**
 * JS validator
 * @description Validate all JS files with JSHint.
 * @returns {Validator}
 */
Validator.prototype.js = function() {
    gulp.src([config.JavaScripts.paths.devDir + '/**/*.js'])
        .pipe(jshint('./Build/JSHintConfig.json'))
        .pipe(jshint.reporter('jshint-stylish'));

    return this;
};

/**
 * Sass validator
 * @description Validate all SCSS files with SCSSLint.
 * @returns {Validator}
 */
Validator.prototype.sass = function() {
    return this;
};



/**
 * Gulp Tasks
 */
// Create the instance of the compiler.
var compile = new Compiler();
var validate = new Validator();

// Default task
gulp.task('default', ['compile']);


// Validators.
gulp.task('validate:js', validate.js);
gulp.task('validate:sass', validate.sass);
gulp.task('validate', ['validate:js', 'validate:sass']);


// Compilers.
gulp.task('compile:css', compile.css);
gulp.task('compile:js', function() {
    compile.jsVendor();
    compile.jsMain();
});
gulp.task('compile:docs', compile.docs);
gulp.task('compile', ['compile:css', 'compile:js', 'compile:docs']);