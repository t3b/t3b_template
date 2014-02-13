// Project configuration.

var pkg = require("../package");

module.exports = {
	"package" : pkg,
	"paths" : {
		"private":  "Resources/Private",
		"public":   "Resources/Public",
	},
	"Sass" : {
		"sassDir" : "Resources/Private/Sass",
		"cssDir" : "Resources/Public/Stylesheets"
	},
	"JavaScripts" : {
		"devDir" : "Resources/Private/Javascripts",
		"distDir" : "Resources/Public/Javascripts",
		"config" : "Resources/Private/Javascripts/Main.js",
		"requireJS" : "Resources/Private/Javascripts/Libaries/RequireJS/require",
		"compileDistFile" : "Resources/Public/Javascripts/Main.min.js"
	},
	"Images" : {
		"devDir" : "Resources/Private/Images",
		"distDir" : "Resources/Public/Images",
		"optimizationLevel" : 5
	},
	"packageIsDefault" : pkg.name === "t3b_template" // Check if the defaults in 'package.json' are customized.
};
