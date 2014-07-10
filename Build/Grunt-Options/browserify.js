/**
 * Grunt-Browserify
 * @description Grunt task for node-browserify.
 * @docs https://github.com/jmreidy/grunt-browserify
 */

var config = require('../Config'),
	modules = {};

// Set the key for the main js application which should be compiled with browserify.
modules[config.JavaScripts.paths.distDir + '/App.min.js'] = [config.JavaScripts.paths.devDir + '/App.js'];


module.exports = {
	options: {
		bundleOptions: {
			// Create a sourcemap.
			debug: true
		}
	},
	dev: {
		files: modules
	},
	deploy: {
		files: modules,
		options: {
			// Strip console.logs and uglify the build on deploy.
			transform: ['stripify', 'uglifyify']
		}
	}
};
