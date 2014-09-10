/**
 * Defines a dummy module
 *
 * @module Modules/Module
 */

var App;

/**
 * App
 * @param el {HTMLELement} The el on which the App initializes itself.
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
 * @returns {Object} The App itself.
 */
App.prototype.render = function() {
	'use strict';

	// Return false if not 'el' was set in the app.
	if(!this.el) {
		return false;
	}

	this.el.innerHTML = 'App is rendered properly!';

	return this;
};

module.exports = App;
