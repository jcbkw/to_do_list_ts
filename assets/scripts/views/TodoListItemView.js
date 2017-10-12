System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoListItemView;
    return {
        setters: [],
        execute: function () {
            TodoListItemView = /** @class */ (function () {
                function TodoListItemView(parent, template) {
                    this.parent = parent;
                    this.template = template;
                }
                TodoListItemView.prototype.getElement = function () {
                    return this.el;
                };
                TodoListItemView.prototype.render = function (message) {
                    var html = this.template(message);
                    this.parent.innerHTML += html;
                    this.el = this.parent.querySelector("[item-id=\"" + message.id + "\"]");
                };
                return TodoListItemView;
            }());
            exports_1("TodoListItemView", TodoListItemView);
        }
    };
});
//# sourceMappingURL=TodoListItemView.js.map