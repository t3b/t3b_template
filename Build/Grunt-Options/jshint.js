/**
 * Grunt-Contrib-JSHint
 * @description Validate files with JSHint.
 * @docs https://github.com/gruntjs/grunt-contrib-jshint
 */

var config = require("../Config");

module.exports = {
	"options" : {
		"jshintrc" : config.JavaScripts.jsHint.config,
		"reporter" : require("jshint-stylish") // Use a more readable JSHint output theme
	},
	"files" : [
		"Gruntfile.js",
		"Build/**/*.js",
		config.JavaScripts.devDir + "/*.js",
		"!" + config.JavaScripts.devDir + "/Libaries/**/*",
		"!" + config.JavaScripts.distDir + "/Libaries/**/*"
	]
};
