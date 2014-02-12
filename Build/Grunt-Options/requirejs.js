/**
 * Grunt-Contrib-RequireJS
 * @description Optimize RequireJS projects using r.js.
 * @docs https://github.com/gruntjs/grunt-contrib-requirejs
*/

var config = require("../Config");

module.exports = {
  deploy: {
    options: {
      mainConfigFile: config.JavaScripts.config,
      include: [config.JavaScripts.requirejs],
      out: config.JavaScripts.compileDistFile,

      // Wrap in an IIFE
			wrap: true,

			// Generate source maps for the build.
			generateSourceMaps: true,

			// Do not preserve license comments when working with source maps, incompatible.
			preserveLicenseComments: false,

			// Uglify the build with 'uglify2'.
			optimize: 'uglify2'
    }
  }
};

