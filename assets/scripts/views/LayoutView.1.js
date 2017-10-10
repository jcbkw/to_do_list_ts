System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LayoutView;
    return {
        setters: [],
        execute: function () {
            LayoutView = /** @class */ (function () {
                function LayoutView(dom, externals) {
                    this.dom = dom;
                    this.externals = externals;
                    this.render();
                }
                LayoutView.prototype.getElement = function () {
                    return this.el;
                };
                LayoutView.prototype.getClass = function () {
                    return this.el;
                };
                LayoutView.prototype.updateTemplate = function () {
                    var template = Handlebars.compile(this.externals.layoutTpl);
                    var html = template(this.externals.content);
                    this.dom.body.innerHTML = html;
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
//# sourceMappingURL=LayoutView.1.js.map