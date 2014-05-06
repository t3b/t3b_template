/**
 * Helpers
 * Helper-Functions which shoudl be aviable globally.
 */

var fs = require("fs"),
	config = require("../Config"),
	helpers = {
		copyFile : function(source, dist) {
			"use strict";

			fs.createReadStream(source).pipe(fs.createWriteStream(dist));
		},
		deleteFiles : function(files){
			"use strict";

			files.forEach(function(file){
				fs.unlink(file);
			});
		},
		isPackageDefault : function() {
			"use strict";

			return config.package.name === "t3b_template";
		}
	};

module.exports = helpers;
