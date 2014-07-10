/**
 * Defines a dummy module
 *
 * @module Modules/Module
 */


/**
 * App
 * @param el
 * @constructor
 */
var App = function(el) {
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

	this.el.innerHTML = 'require.js up and running';

	return this;
};

module.exports = App;

