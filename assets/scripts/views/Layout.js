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
                Layout.prototype.getTemplate = function (url) {
                    var _this = this;
                    var xml = new XMLHttpRequest;
                    xml.addEventListener("load", function (e) {
                        _this.dom.body.innerHTML = xml.responseText;
                    }, false);
                    xml.open("GET", url);
                    xml.send();
                };
                Layout.prototype.render = function () {
                    this.getTemplate("/assets/templates/Layout.html");
                };
                return Layout;
            }());
            exports_1("Layout", Layout);
        }
    };
});
