/**
 * Grunt-Contrib-copy
 * @description Copy files and folders.
 * @docs https://github.com/gruntjs/grunt-contrib-copy
 */

var config = require("../Config"),
	createNodeMdulesTargets = function() {
		"use strict";

		var nodeModulesFiles = [];

		for(var key in config.nodeModuleDists) {
			if (config.nodeModuleDists.hasOwnProperty(key)) {
				nodeModulesFiles.push({
					expand: true,
					cwd: "./node_modules/" + key,
					src: "**",
					dest: config.nodeModuleDists[key]
				})
			}
		}

		return nodeModulesFiles;
	};



module.exports = {
	imagesDir: {
		files: [{
			expand: true,
			cwd: config.Images.distDir + '/',
			src: "**",
			dest: config.Images.tempDir
		}]
	},
	nodeModules: {
		files: createNodeMdulesTargets()
	}
};
