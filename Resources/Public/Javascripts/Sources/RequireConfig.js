/**
 * RequireJS configuration
 * @description Pass in options for RequireJS like paths, shims or the baseUrl
 */
require.config({
	shim: {},
	paths: {
		"main" : "Main",
		"mainModule" : "Modules/Main"
	},

	// Append a date on each requested script to prevent caching issues.
	urlArgs: "bust=" + Date.now(),

	// Initialize the application with the main application file
	deps: ["main"]
});
