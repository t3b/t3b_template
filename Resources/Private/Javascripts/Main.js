/**
 * RequireJS configuration
 * @description Pass in options for RequireJS like paths, shims or the baseUrl
 */
require.config({
	paths: {
		"mainModule" : "Modules/Main"
	},

	// Array of entry points which should be included in the optimized final build.
	// The preset entry point is this file.
	include: ["Main"],

	// Append a date on each requested script to prevent caching issues.
	urlArgs: "bust=" + Date.now()
});


/**
 * RequireJS calls
 * @description Call the needed AMD modules.
 */
require(["mainModule"], function(MainFn) {
	"use strict";

	new MainFn();
});
