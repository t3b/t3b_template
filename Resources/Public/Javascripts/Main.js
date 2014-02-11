/**
 * RequireJS configuration
 * @description Pass in options for RequireJS like paths, shims or the baseUrl
 */
require.config({
	paths: { },

	// Append a date on each requested script to prevent caching issues.
	urlArgs: 'bust=' + (new Date()).getDate()
});


/**
 * RequireJS calls
 * @description Call the needed AMD modules.
 */
require(['Modules/Main'], function(mainFn) {
	new mainFn;
});
