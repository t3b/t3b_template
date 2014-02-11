// Project configuration.

var pkg = require('../package');

module.exports = {
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
	ImagesDir : 'Resources/Public/Images',
	packageIsDefault : (pkg.name === 't3b_template') ? true : false // Check if the defaults in 'package.json' are customized.
};
