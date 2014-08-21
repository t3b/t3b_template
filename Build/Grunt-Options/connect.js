/**
 * Grunt-Contrib-Connect
 * @description Start a connect web server.
 * @docs https://github.com/gruntjs/grunt-contrib-connect
 */

var config = require('../Config'),
	karmaConfig = require('./karma');

module.exports = {
	karma: {
		port: karmaConfig.options.runnerPort
	}
};
