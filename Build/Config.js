/**
 * Config
 * @description Configure grunt tasks & options.
 */

var ConfigCreator = function() {
	'use strict';

	// Contents of the package.json.
	this.package = require('../package');


	// Banner comment for compressed files.
	this.bannerComment = function(description) {
		var banner;

		// Add a delimiter between the description - if one was passed - and the build date.
		description = (description) ? description + ' - ' : '';

		banner = '/*!\n' +
		         '* ' + description + 'Built on: <%= grunt.template.today("yyyy-mm-dd") %> \n' +
		         '* \n' +
		         '* @package ' + this.package.name + '\n' +
		         '* @author ' + this.package.author.name + ' <' +  this.package.author.email + '>' + '\n' +
		         '*/\n';

		return banner;
	};


	// General Paths/Structure of the extension.
	this.paths = {
		private : 'Resources/Private',
		public : 'Resources/Public',
	};
	this.Sass = {
		sassDir : this.paths.private + '/Sass',
		cssDir : this.paths.public + '/Stylesheets',
		browserSupport : ['last 2 version', 'ie 8', 'ie 9'] // Browsers which to support, and to prefix the CSS rules for.
	};
	this.JavaScripts = {};
	this.JavaScripts.paths = {
		devDir : this.paths.private + '/Javascripts',
		distDir : this.paths.public + '/Javascripts'
	};


	// JSHint settings.
	this.JavaScripts.jsHint = {
		config : 'Build/JSHintConfig.json',
		files : [
			'Gruntfile.js',
			'Build/**/*.js',
			this.JavaScripts.paths.devDir + '/**/*.js',
			'!Build/Templates/Kss-Node/**/*',
			'!' + this.JavaScripts.paths.devDir + '/Vendor/**/*',
			'!' + this.JavaScripts.paths.distDir + '/Vendor/**/*'
		]
	};

	// JsDoc settings.
	this.JavaScripts.jsDoc = {
		files : [
			this.JavaScripts.paths.devDir + '/**/*.js',
			'!' + this.JavaScripts.paths.devDir + '/Vendor/**/*'
		]
	};


	// Modernizr settings.
	this.JavaScripts.modernizr = {
		devSourceFile : this.JavaScripts.paths.devDir + '/Vendor/modernizr/modernizr.js',
		buildDistFile : this.JavaScripts.paths.distDir + '/Vendor/Modernizr-Custom.js',
		files : {
			src : [
				'**/*.{js,css,scss}',
				'!node_modules/**/*',
				'!Gruntfile.js',
				'!Build/**/*',
				'!' + this.JavaScripts.paths.devDir + '/Vendor/**/*',
				'!' + this.JavaScripts.paths.distDir + '/Vendor/**/*'
			]
		}
	};


	// Image compression settings.
	this.Images = {
		tempDir : this.paths.public + '/tempImagesDir',
		distDir : this.paths.public + '/Images',
		optimizationLevel : 5
	};


	// Karma settings.
	this.karma = {
		config : 'Build/KarmaConfig.js',
		port: 8000,
		browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS'],
		coverageDir: this.paths.public + '/Javascripts/Tests/Coverages/',
		testsDir : this.paths.public + '/Javascripts/Tests'
	};

	// Copy the source files of node modules into a specified location.
	this.nodeModuleDists = {
		modernizr: this.JavaScripts.paths.devDir + '/Vendor/modernizr/'
	};
};

module.exports = new ConfigCreator();
