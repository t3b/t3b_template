module.exports = {
	// Slightly modified default settings of http://modernizr.com/download/
	"extra" : {
		"shiv": true,
		"printshiv": false,
		"load": false,
		"mq": false,
		"cssclasses": true
	},
	// Based on default settings on http://modernizr.com/download/
	"extensibility" : {
		"addtest": false,
		"prefixed": false,
		"teststyles": false,
		"testprops": false,
		"testallprops": false,
		"hasevents": false,
		"prefixes": false,
		"domprefixes": false
	},
	// Define any tests you want to implicitly include.
	"tests" : [],
	// Have custom Modernizr tests? Add paths to their location here.
	"customTests" : [],
	// matchCommunityTests = true will attempt to match user-contributed tests.
	"matchCommunityTests" : false
};
