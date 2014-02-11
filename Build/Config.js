// Project configuration.

var pkg = require('../package'),
		modernizrConfig = require('./ModernizrConfig');

module.exports = {
	package : pkg,
	paths : {
		private:  'Resources/Private',
		public:   'Resources/Public',
	},
	Sass : {
		sassDir : 'Resources/Private/Sass',
		cssDir : 'Resources/Public/Stylesheets'
	},
	JavaScripts : {
		devDir :'Resources/Private/Javascripts',
		distDir : 'Resources/Public/Javascripts'
	},
	Modernizr : modernizrConfig,
	Images : {
		devDir : 'Resources/Private/Images',
		distDir : 'Resources/Public/Images',
		optimizationLevel : 5
	},
	packageIsDefault : (pkg.name === 't3b_template') ? true : false // Check if the defaults in 'package.json' are customized.
};
