/**
 * RequireJS configuration
 * @description Pass in options for RequireJS like paths, shims or the baseUrl
 */
require.config({
	shim: {},
	paths: {
		"mainModule" : "Modules/Main"
	},

	// Append a date on each requested script to prevent caching issues.
	urlArgs: "bust=" + Date.now()
});


/**
 * RequireJS calls
 * @description Require and fire off the main/initial file of the application.
 */
require(["mainModule"], function(MainFn) {
	"use strict";

	new MainFn();
});
