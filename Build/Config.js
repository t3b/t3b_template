// Project configuration.

var pkg = require('../package');

module.exports = {
  paths : {
		private:  'Resources/Private',
		sass:     'Resources/Private/Sass',
		privateJs:'Resources/Private/Javascripts',
		public:   'Resources/Public',
		css:      'Resources/Public/Stylesheets',
		images:   'Resources/Public/Images',
		publicJs: 'Resources/Public/Javascripts'
	},
	packageIsDefault : (pkg.name === 't3b_template') ? true : false // Check if the defaults in 'package.json' are customized.
};
