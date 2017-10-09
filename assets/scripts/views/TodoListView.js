System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoListView;
    return {
        setters: [],
        execute: function () {
            TodoListView = /** @class */ (function () {
                function TodoListView(parent) {
                    this.parent = parent;
                    this.render();
                }
                TodoListView.prototype.getElement = function () {
                    return this.el;
                };
                // Maybe I can use map and the REST parameters to dynamically create
                //dom elements on the fly for the render function.
                TodoListView.prototype.render = function () {
                    var main = this.parent.getElement();
                };
                return TodoListView;
            }());
            exports_1("TodoListView", TodoListView);
        }
    };
});
//# sourceMappingURL=TodoListView.js.map