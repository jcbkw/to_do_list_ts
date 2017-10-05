System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Layout;
    return {
        setters: [],
        execute: function () {
            Layout = /** @class */ (function () {
                function Layout(dom) {
                    this.dom = dom;
                    this.render();
                }
                Layout.prototype.getElement = function () {
                    return this.el;
                };
                Layout.prototype.getClass = function () {
                    return this.el;
                };
                Layout.prototype.render = function () {
                    this.el = this.dom.createElement("main");
                    this.dom.body.appendChild(this.el);
                };
                return Layout;
            }());
            exports_1("Layout", Layout);
        }
    };
});
