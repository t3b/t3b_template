/**
 * Example Spec
 * @description An example specification for the example module in 'Modules/Module'.
 */

define(["Modules/Module"], function (App) {
	"use strict";

	describe("just checking", function() {

        it("works for app", function() {
            var el = $("<div></div>");

            var app = new App(el);
            app.render();

            expect(el.text()).toEqual("require.js up and running");
        });
    });
});
