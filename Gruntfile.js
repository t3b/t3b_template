module.exports = function(grunt) {
	'use strict';

	// Project paths.
	var path = {
		private:  'Resources/Private',
		public:   'Resources/Public',
		sass:     '<%= path.private %>/Sass',
		css:      '<%= path.public %>/Stylesheets',
		images:   '<%= path.public %>/Images',
		privateJs:'<%= path.private %>/Javascripts',
		publicJs: '<%= path.public %>/Javascripts'
	};

	// Project configuration.
	grunt.initConfig({
		path: path,
		pkg: grunt.file.readJSON('package.json'),


		// Grunt-Contrib-Compass
		// Compiles .scss/.sass files to .css using Compass.
		// https://github.com/gruntjs/grunt-contrib-compass
		compass: {
			options: {
				// Specify the config.rb filepath
				config: '<%= path.sass %>/Config.rb',

				// Override Configuration paths as all grunt paths are relative to the Gruntfile
				sassDir: '<%= path.sass %>',
				cssDir: '<%= path.css %>',
				imagesDir: '<%= path.images %>',
				javascriptsDir: '<%= path.privateJs %>'
			},
			dev: {
				options: {
					outputStyle: 'compact',
					environment: 'development'
				}
			},
			prod: {
				options: {
					outputStyle: 'compressed',
					environment: 'production'
				}
			}
		},


		// Grunt-Contrib-Clean
		// Cleans files and folders.
		// https://github.com/gruntjs/grunt-contrib-clean
		clean: {
			css: ['<%= path.css %>/*.css']
		},


		// Grunt-Replace
		// Replace inline patterns with variables.
		// https://npmjs.org/package/grunt-replace
		replace: {
			init: {
				src: ['**/*.php', '**/*.txt', '**/*.ts', '**/*.html', '**/*.scss', '!node_modules/**/*', '!<%= path.privateJs %>/Libaries/**/*'],
				overwrite: true,
				replacements: [{
					from: '<!= pkg.name !>',
					to: '<%= pkg.name %>'
				}, {
					from: '<!= pkg.description !>',
					to: '<%= pkg.description %>'
				}, {
					from: '<!= pkg.homepage !>',
					to: '<%= pkg.homepage %>'
				}, {
					from: '<!= pkg.version !>',
					to: '<%= pkg.version %>'
				}, {
					from: '<!= pkg.author.name !>',
					to: '<%= pkg.author.name %>'
				}, {
					from: '<!= pkg.author.email !>',
					to: '<%= pkg.author.email %>'
				}]
			},
			modernizr: {
				src: ['<%= path.private %>/Layouts/*.html'],
				overwrite: true,
				replacements: [{
					from: 'Resources/Private/Javascripts/Libaries/Modernizr/modernizr.js',
					to: '<%= path.publicJs %>/Libaries/Modernizr-Custom.js'
				}]
			}
		},


		// Grunt-Modernizr
		// Crawls through source files, gathers up references to Modernizr tests and outputs a clean Modernizr build.
		// https://github.com/Modernizr/grunt-modernizr
		modernizr: {
			devFile: '<%= path.privateJs %>/Libaries/Modernizr/modernizr.js',
			outputFile: '<%= path.publicJs %>/Libaries/Modernizr-Custom.js',

			// Based on default settings on http://modernizr.com/download/
			extra: {
				shiv: true,
				printshiv: false,
				load: true,
				mq: false,
				cssclasses: true
			},
			// Based on default settings on http://modernizr.com/download/
			extensibility: {
				addtest: false,
				prefixed: false,
				teststyles: false,
				testprops: false,
				testallprops: false,
				hasevents: false,
				prefixes: false,
				domprefixes: false
			},
			files: [
				'**/*.{js,css,scss}',
				'!node_modules/**/*',
				'!{Gruntfile,grunt}.js',
				'!<%= path.privateJs %>/Libaries/Modernizr/**/*'
			]
		},


		// Grunt-Contrib-JSHint
		// Validate files with JSHint.
		// https://github.com/gruntjs/grunt-contrib-jshint
		jshint: {
			options: {
				browser: true,
				curly: false,
				devel: true,
				eqeqeq: false,
				eqnull: true,
				expr: true,
				evil: true,
				smarttabs: true,
				globals: {
					Modernizr: true,
					define: true,
					require: true
				}
			},
			files: [
				'Gruntfile.js',
				'<%= path.privateJs %>/*.js'
			]
		},


		// Grunt-ImageOptim
		// Lossless optimisation of images
		// https://github.com/gruntjs/grunt-contrib-watch
		imageoptim: {
			files: [
				'<%= path.images %>'
			],
			options: {
				imageAlpha: true,
				jpegMini: false,
				quitAfter: true
			}
		},


		// Grunt-Shell
		// Run shell commands.
		// https://npmjs.org/package/grunt-shell
		shell: {
			gitSubmoduleUpdate: {
				command: 'git submodule init && git submodule update'
			}
		},


		// Grunt-Contrib-Watch
		// Run tasks whenever watched files change.
		// https://github.com/gruntjs/grunt-contrib-watch
		watch: {
			options: {
				nospawn: true
			},
			sass: {
				files: ['<%= path.sass %>/**/*.scss'],
				tasks: ['compass:dev']
			},
			js: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint']
			}
		}
	});


	// Load all grunt-plugins that are specified in the 'package.json' file.
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Default grunt task.
	// Compiles all .scss/.sass files with ':dev' options and
	// validates all js-files inside Resources/Private/Javascripts with JSHint.
	grunt.registerTask('default', ['compass:dev', 'jshint']);

	// Initialize task.
	// Replaces all t3b_template strings and other meta-data with the data
	// specified inside the 'package.json'. (Should be run after downloading the extension).
	grunt.registerTask('init', ['replace:init', 'compass:dev', 'shell:gitSubmoduleUpdate']);

	// Deploy task
	// Recompiles all .scss/.sass files with ':prod' options (Minified), creates an
	// custom Modernizr build and changes the affected paths in all Fluid Layouts.
	grunt.registerTask('deploy', ['clean:css', 'compass:prod', 'modernizr', 'replace:modernizr']);

	// Travis CI task
	// Replaces all replace strings with the standard meta data stored in the package.json
	// and tests all JS files with JSHint, this task is used by Travis CI.
	grunt.registerTask('travis', ['replace:init', 'compass:prod', 'jshint']);
};