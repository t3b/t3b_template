/**
 * Grunt-Karma
 * @description Grunt plugin for Karma.
 * @docs https://github.com/karma-runner/grunt-karma
 */

var config = require('../Config');

module.exports = {
	options: {
		configFile: config.karma.config,
		runnerPort: config.karma.port
	},

	// Testing in all browsers
	test: {
		options: {
			browsers: config.karma.browsers
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
