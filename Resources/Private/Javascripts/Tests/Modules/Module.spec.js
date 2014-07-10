/**
 * Example Spec
 * @description An example specification for the example module in 'Modules/Module'.
 */

var module = require('./../../Modules/Module');

describe('just checking', function() {
	'use strict';

	it('module works', function() {
		var el = document.createElement('div');

		var app = new module(el);
		app.render();

		expect(el.innerHTML).toEqual('require.js up and running');
	});
});
