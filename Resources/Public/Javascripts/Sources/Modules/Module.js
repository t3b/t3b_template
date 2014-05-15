define(function(require) {
	"use strict";

	var App = function(el) {
        this.el = el;
    };

    App.prototype.render = function() {
        this.el.innerHTML = "require.js up and running";
    };

    return App;
});
