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
		"requireJS" : {
			"config" : "Resources/Private/Javascripts/Main.js",
			"libSourceFile" : "Libaries/RequireJS/require",
			"compileDistFile" : "Resources/Public/Javascripts/Main.min.js"
		},
		"jsHintConfig" : "Build/JSHintConfig.json"
	},
	"Images" : {
		"devDir" : "Resources/Private/Images",
		"distDir" : "Resources/Public/Images",
		"optimizationLevel" : 5
	},
	"packageIsDefault" : pkg.name === "t3b_template" // Check if the defaults in 'package.json' are customized.
};
