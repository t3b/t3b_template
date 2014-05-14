define(function(require) {
	"use strict";

	var App = function(el) {
		this.el = el;
	};

	App.prototype.render = function() {
		this.el.html('require.js up and running');
	};

	return App;
});
