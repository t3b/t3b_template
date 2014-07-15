/**
 * Example Spec
 * @description An example specification for the example module in 'Modules/Module'.
 */

var Module = require('./../../Modules/Module');

describe('just checking', function() {
	'use strict';

	it('should render a div with an example text inside of it', function() {
		var el = document.createElement('div');

		var app = new Module(el);
		app.render();

		expect(el.innerHTML).toEqual('App is rendered properly!');
	});
});
