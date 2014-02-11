module.exports = {
	"extra" : { // Slightly modified default settings of http://modernizr.com/download/
		"shiv": true,
		"printshiv": false,
		"load": false,
		"mq": false,
		"cssclasses": true
	},
	"extensibility" : { // Based on default settings on http://modernizr.com/download/
		"addtest": false,
		"prefixed": false,
		"teststyles": false,
		"testprops": false,
		"testallprops": false,
		"hasevents": false,
		"prefixes": false,
		"domprefixes": false
	},
	"tests" : [], // Define any tests you want to implicitly include.
	"customTests" : [], // Have custom Modernizr tests? Add paths to their location here.
	"matchCommunityTests" : false // When parseFiles = true, matchCommunityTests = true will attempt to match user-contributed tests.
};
