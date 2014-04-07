/**
 * Helpers
 * Helper-Functions which shoudl be aviable globally.
 */

var fs = require('fs'),
	helpers = {
		'copyFile' : function(source, dist) {
			"use strict";

			fs.createReadStream(source).pipe(fs.createWriteStream(dist));
		}
	};

module.exports = helpers;
