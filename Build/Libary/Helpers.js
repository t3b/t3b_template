/**
 * Helpers
 * Helper-Functions which shoudl be aviable globally.
 */

var fs = require('fs'),
	helpers = {
		'copyFile' : function(source, dist) {
			"use strict";

			fs.createReadStream(source).pipe(fs.createWriteStream(dist));
		},
		'deleteFiles' : function(files){
			"use strict";

			files.forEach(function(file){
				fs.unlink(file);
			});
		}
	};

module.exports = helpers;
