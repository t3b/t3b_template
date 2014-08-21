/**
 * Grunt-Karma
 * @description Grunt plugin for Karma.
 * @docs https://github.com/karma-runner/grunt-karma
 */

var config = require('../Config');

module.exports = {
	options: {
		configFile: 'Build/KarmaConfig.js',
		runnerPort: 8000
	},

	// Testing in all browsers
	test: {
		options: {
			browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS']
		}
	},

	// Continuous Integration(f.e. travis)
	// Use a PhantomJS instance to test the JS inside the console without a gui/app.
	ci: {
		options: {
			browsers: ['PhantomJS']
		}
	}
};
