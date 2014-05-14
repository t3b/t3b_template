/**
 * Grunt-Contrib-Connect
 * @description Start a connect web server.
 * @docs https://github.com/gruntjs/grunt-contrib-connect
 */

var config = require("../Config");

module.exports = {
	karma: {
		port: config.karma.port
	}
};
