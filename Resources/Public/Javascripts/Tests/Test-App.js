// jshint camelcase: false
(function () {
	'use strict';

	// Make async
	window.__karma__.loaded = function () {};

	require.config({

		// Set baseUrl for Karma
		baseUrl: 'base/Resources/Public/Javascripts/Sources',

		deps: ['RequireConfig'],

		// Location of tests
		paths: {

			// Location of tests
			spec: '../Tests/SpecList',
			specs: '../Tests/Specs'
		}
	});

	require(['spec'], function (spec) {

		// Load all specs
		require(spec.specs, function () {

			// Start Karma
			window.__karma__.start();
		});
	});
}());
