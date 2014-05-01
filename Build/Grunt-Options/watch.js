/**
 * Grunt-Contrib-Watch
 * @description Run tasks whenever watched files change.
 * @docs https://github.com/gruntjs/grunt-contrib-watch
 */

var config = require("../Config");
module.exports = {
	"options" : {
		"nospawn" : true
	},
	"sass" : {
		"files" : [config.Sass.sassDir + "/**/*.scss"],
		"tasks" : ["sass:dev", "autoprefixer:main"]
	},
	"js" : {
		"files" : ["<%= jshint.files %>"],
		"tasks" : ["jshint"]
	},
	"docs" : {
		"files" : ["Documentation/Private/Template/**/*"],
		"tasks" : ["styleguide", "autoprefixer:styleguide"]
	}
};
