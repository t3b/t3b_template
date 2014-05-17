/**
 * Example Spec
 * @description An example specification for the example module in 'Modules/Module'.
 */

define(['Modules/Module'], function (module) {
	'use strict';

	describe('just checking', function() {
		it('module works', function() {
			var el = document.createElement('div');

			var app = new module(el);
			app.render();

			expect(el.innerHTML).toEqual('require.js up and running');
		});
	});
});
