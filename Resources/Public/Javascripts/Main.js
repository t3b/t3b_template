/**
 * RequireJS configuration
 * @description Pass in options for RequireJS like paths, shims or the baseUrl
 */
require.config({
	paths: { }
});


/**
 * RequireJS calls
 * @description Call the needed AMD modules.
 */
require(['Modules/Main'], function(MainFn) {
	new MainFn;
});