/**
 * Test-App.js
 * @description Set the requireJS environment, load each test spec and fire off karma.
 */

(function() {
	"use strict";

	// Make async
	window.__karma__.loaded = function () {};

	require.config({
		// Set baseUrl for Karma
		baseUrl: "/base/Resources/Public/Javascripts/Sources",

		deps: ["RequireConfig"],
	});

	require(["../Tests/SpecList"], function (specList) {

		// Load all specs
		require(specList.specs, function () {

			// Start Karma
			window.__karma__.start();
		});
	});
}());
