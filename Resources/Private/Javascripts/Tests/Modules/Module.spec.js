/**
 * Example Spec
 * @description An example specification for the example module in 'Modules/Module'.
 */

var Module = require('./../../Modules/Module');

describe('just checking', function() {
	'use strict';

	it('The Module should render an element with the example text inside of it.', function() {
		var el = document.createElement('div');

		var app = new Module(el);
		app.render();

		expect(el.innerHTML).toEqual('App is rendered properly!');
	});

	it('The Module should return false if no element was set.', function() {
		var app = new Module();

		expect(app.render()).toBeFalsy();
	});
});
