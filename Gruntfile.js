module.exports = function(grunt) {
	'use strict';

	// Project paths.
	var globalConfig = {
		private: 'Ressources/Private',
		public: 'Ressources/Public'
	};

	// Project configuration.
	grunt.initConfig({
		globalConfig: globalConfig,
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			options: {
				// Specify the config.rb filepath
				config: '<%= globalConfig.private %>/Sass/config.rb',

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

		clean: {
			compass: ['<%= compass.options.cssDir %>/*.css']
		},

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
				src: ['<%= compass.options.sassDir %>/main.scss'],
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
	grunt.registerTask('default', ['compass:dev', 'jshint']);
	// Initialize task (Should be run after installing the extension)
	grunt.registerTask('init', ['replace', 'compass:dev']);
	// Deploy task
	grunt.registerTask('deploy', ['clean:compass', 'compass:prod']);
};