/**
 * Defines a dummy module
 *
 * @module Modules/Module
 */

var App;

/**
 * App
 * @param el
 * @constructor
 */
App = function(el) {
	'use strict';

	this.el = el;
};

/**
 * Function used to to render the App
 *
 * @memberof module:Modules/Module
 * @returns {Object} the App itself.
 */
App.prototype.render = function() {
	'use strict';

	this.el.innerHTML = 'App is rendered properly!';
};

module.exports = App;
