/**
 * Grunt-JsDoc
 * @description This plugin enables you to integrate the generation of comments based documentation into your Grunt build.
 * @docs https://github.com/gruntjs/grunt-contrib-jshint
 */

var config = require('../Config');

module.exports = {
	options: {
		destination: 'Documentation/Javascripts/Documentation',
		template: "./node_modules/ink-docstrap/template",
        configure: "./Build/JSDocConfig.json"
	},
	dev : {
		src: [
			config.JavaScripts.paths.devDir + '/**/*.js',
			'!' + config.JavaScripts.paths.devDir + '/Vendor/**/*'
		]
	}
};
