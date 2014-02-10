/**
 * Grunt-CSS-Metrics
 * Grunt task to analyse css files and log simple metrics.
 * https://github.com/phamann/grunt-css-metrics
 */

var config = require('../Config');

module.exports = {
	common: {
		src: [config.paths.css + '/*.css'],
		options: {
			quiet: false,
			maxRules: 4096, // Maximum CSS rules which IE can handle http://goo.gl/irqrnO
			maxFileSize: 1048576 // 1 mb in bytes - A CSS file shouldn't exceed this limit.
		}
	}
};
