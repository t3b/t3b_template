/**
 * Helpers
 * Helper-Functions which shoudl be aviable globally.
 */

var fs = require('fs'),
	path = require('path'),
	config = require('../Config'),

	helpers = {
		copyFile : function(source, dist) {
			'use strict';

			fs.createReadStream(source).pipe(fs.createWriteStream(dist));
		},
		deleteFiles : function(files){
			'use strict';

			files.forEach(function(file){
				fs.unlink(file);
			});
		},
		isPackageDefault : function() {
			'use strict';

			return config.package.name === 't3b_template';
		},
		filterDirWithFileType : function (pathName, fileType) {
			'use strict';

			var files = fs.readdirSync(pathName);

			return files.filter(function(file) {
				return path.extname(file) === '.' + fileType;
			});
		},
		logError : function(err) {
			console.log(err);
		}
	};

module.exports = helpers;
