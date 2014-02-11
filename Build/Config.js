// Project configuration.

var pkg = require('../package');

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
	Modernizr : {
		extra : { // Slightly modified default settings of http://modernizr.com/download/
			shiv: true,
			printshiv: false,
			load: false,
			mq: false,
			cssclasses: true
		},
		extensibility : { // Based on default settings on http://modernizr.com/download/
			addtest: false,
			prefixed: false,
			teststyles: false,
			testprops: false,
			testallprops: false,
			hasevents: false,
			prefixes: false,
			domprefixes: false
		},
		tests : [], // Define any tests you want to implicitly include.
		customTests : [], // Have custom Modernizr tests? Add paths to their location here.
		matchCommunityTests : false // When parseFiles = true, matchCommunityTests = true will attempt to match user-contributed tests.
	},
	Images : {
		devDir : 'Resources/Private/Images',
		distDir : 'Resources/Public/Images',
	},
	packageIsDefault : (pkg.name === 't3b_template') ? true : false // Check if the defaults in 'package.json' are customized.
};
