module.exports = function(grunt) {
	'use strict';

	// Project paths.
	var globalConfig = {
		private: 'Resources/Private',
		public: 'Resources/Public'
	};

	// Project configuration.
	grunt.initConfig({
		globalConfig: globalConfig,
		pkg: grunt.file.readJSON('package.json'),


		// Grunt-Contrib-Compass
		// Compiles .scss/.sass files to .css using Compass
		// https://github.com/gruntjs/grunt-contrib-compass
		compass: {
			options: {
				// Specify the config.rb filepath
				config: '<%= globalConfig.private %>/Sass/Config.rb',

				// Override Configuration paths as all grunt paths are relative to the Gruntfile
				sassDir: '<%= globalConfig.private %>/Sass',
				cssDir: '<%= globalConfig.public %>/Stylesheets',
				imagesDir: '<%= globalConfig.public %>/Images',
				javascriptsDir: '<%= globalConfig.private %>/Javascripts'
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
		// Cleans files and folders
		// https://github.com/gruntjs/grunt-contrib-clean
		clean: {
			compass: ['<%= compass.options.cssDir %>/*.css']
		},


		// Grunt-Replace
		// Replace inline patterns with variables.
		// https://npmjs.org/package/grunt-replace
		replace: {
			extname: {
				src: ['ext_tables.php'],
				overwrite: true, // overwrite matched source files
				replacements: [{
					from: 't3b_template',
					to: '<%= pkg.name %>'
				}]
			},
			extpaths: {
				src: ['Configuration/TypoScript/*.ts', 'Configuration/TypoScript/*.txt', '<%= globalConfig.private %>/Layouts/*.html'],
				overwrite: true, // overwrite matched source files
				replacements: [{
					from: 'EXT:t3b_template',
					to: 'EXT:<%= pkg.name %>'
				}]
			},
			compass: {
				src: ['<%= compass.options.sassDir %>/Main.scss'],
				overwrite: true, // overwrite matched source files
				replacements: [{
					from: 'pkg_name',
					to: '<%= pkg.name %>'
				}, {
					from: 'pkg.author.name',
					to: '<%= pkg.author.name %>'
				}, {
					from: 'pkg.author.email',
					to: '<%= pkg.author.email %>'
				}, {
					from: 'pkg.homepage',
					to: '<%= pkg.homepage %>'
				}]
			}
		},


		// Grunt-Controb-JSHint
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
				'<%= globalConfig.private %>/Javascripts/*.js'
			]
		},


		// Grunt-Controb-Watch
		// Run tasks whenever watched files change.
		// https://github.com/gruntjs/grunt-contrib-watch
		watch: {
			options: {
				nospawn: true,
			},
			compass: {
				files: ['<%= compass.options.sassDir %>/**/*.scss'],
				tasks: ['compass:dev']
			},
			jshint : {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint']
			}
		}
	});


	// Load all grunt-plugins that are specified in the 'package.json' file.
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Default grunt task.
	// Compiles all .scss/.sass files with ':dev' options and
	// validates all js-files with JSHint.
	grunt.registerTask('default', ['compass:dev', 'jshint']);

	// Initialize task.
	// Replaces all t3b_template strings and other meta-data with the data
	// specified inside the 'package.json'. (Should be run after installing the extension)
	grunt.registerTask('init', ['replace', 'compass:dev']);

	// Deploy task
	// Recompiles all .scss/.sass files with ':prod' options (Minified)
	grunt.registerTask('deploy', ['clean:compass', 'compass:prod']);
};