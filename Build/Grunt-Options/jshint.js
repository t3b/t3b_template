/**
 * Grunt-Contrib-JSHint
 * @description Validate files with JSHint.
 * @docs https://github.com/gruntjs/grunt-contrib-jshint
 */

var config = require('../Config');

module.exports = {
	options: {
		jshintrc: 'Build/JSHintConfig.json',
		reporter: require('jshint-stylish') // Use a more readable JSHint output theme
	},
	files: [
		'Gruntfile.js',
		'Build/**/*.js',
		config.JavaScripts.paths.devDir + '/**/*.js',
		'!' + config.JavaScripts.paths.devDir + '/Vendor/**/*',
		'!' + config.JavaScripts.paths.distDir + '/Vendor/**/*'
	]
};
