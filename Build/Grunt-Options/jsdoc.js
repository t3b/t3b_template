/**
 * Grunt-JsDoc
 * @description This plugin enables you to integrate the generation of comments based documentation into your Grunt build.
 * @docs https://github.com/gruntjs/grunt-contrib-jshint
 */

var config = require('../Config');

module.exports = {
	dist : {
		src: config.JavaScripts.jsDoc.files,
		options: {
			destination: 'Documentation/Javascript'
		}
	}
};
