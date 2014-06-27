/**
 * Defines a dummy module
 *
 * @module Modules/Module
 */
define(function(require) {
	'use strict';

	/**
	 * App
	 * @param el
	 * @constructor
	 */
	var App = function(el) {
		this.el = el;
	};

	/**
	 * Function used to to render the App
	 *
	 * @memberof module:Modules/Module
	 * @returns {Object} the App itself.
	 */
	App.prototype.render = function() {
		this.el.innerHTML = 'require.js up and running';

		return this;
	};

	return App;
});
