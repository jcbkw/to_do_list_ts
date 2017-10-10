System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LayoutView;
    return {
        setters: [],
        execute: function () {
            LayoutView = /** @class */ (function () {
                function LayoutView(dom, data) {
                    this.dom = dom;
                    this.data = data;
                    this.render();
                }
                LayoutView.prototype.getElement = function () {
                    return this.el;
                };
                LayoutView.prototype.getClass = function () {
                    return this.el;
                };
                LayoutView.prototype.updateTemplate = function () {
                    var templateSetup = this.data;
                    this.dom.body.innerHTML = templateSetup.data.content;
                };
                LayoutView.prototype.render = function () {
                    this.updateTemplate();
                };
                return LayoutView;
            }());
            exports_1("LayoutView", LayoutView);
        }
    };
});
//# sourceMappingURL=LayoutView.js.map