/**
 * Grunt-Browserify
 * @description Grunt task for node-browserify.
 * @docs https://github.com/jmreidy/grunt-browserify
 */

var config = require('../Config'),
	externals = require('../../Resources/Private/Javascripts/Vendor'),
	vendorFile = {},
	files = {};

// Set the key for the main js application which should be compiled with browserify.
files[config.JavaScripts.paths.distDir + '/App.min.js'] = [config.JavaScripts.paths.devDir + '/App.js'];
vendorFile[config.JavaScripts.paths.distDir + '/Vendor.min.js'] = [config.JavaScripts.paths.devDir + '/Vendor.js'];


module.exports = {
	options: {
		external: externals,
		bundleOptions: {
			debug: true // Create a sourcemap.
		}
	},
	dev: {
		files: files
	},
	deploy: {
		options: {
			transform: ['stripify', 'uglifyify'] // Strip console.logs and uglify the build on deploy.
		},
		files: files
	},
	vendor: {
		options: {
			debug: false,
			external: null,
			require: externals,
			transform: ['uglifyify']
		},
		files: vendorFile
	}
};
