System.register(["./TodoListView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoListView_1, LayoutView;
    return {
        setters: [
            function (TodoListView_1_1) {
                TodoListView_1 = TodoListView_1_1;
            }
        ],
        execute: function () {
            LayoutView = /** @class */ (function () {
                function LayoutView(dom, externals) {
                    this.dom = dom;
                    this.externals = externals;
                }
                LayoutView.prototype.getElement = function () {
                    return this.el;
                };
                LayoutView.prototype.render = function () {
                    this.updateTemplate();
                    var list = new TodoListView_1.TodoListView(this.el.querySelector('.main-content'), this.externals);
                    list.render();
                };
                LayoutView.prototype.updateTemplate = function () {
                    var template = Handlebars.compile(this.externals.layoutTpl);
                    var html = template(this.externals.content);
                    this.dom.body.innerHTML = html;
                    this.el = this.dom.body.querySelector('.main-wrapper');
                };
                return LayoutView;
            }());
            exports_1("LayoutView", LayoutView);
        }
    };
});
//# sourceMappingURL=LayoutView.js.map