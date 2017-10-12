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
                    // we use a div to parse our HTML template text into an actual DOM Elment
                    // that way, we don't have to user .innerHTML of the parent, we can .appendChild
                    // with a REAL DOM Element, created form our template
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = html;
                    // see, now i'm getting my ACTUAL DOM element from the div :)
                    this.el = tempDiv.querySelector("[item-id=\"" + message.id + "\"]");
                    tempDiv.removeChild(this.el);
                    tempDiv = null;
                    this.parent.appendChild(this.el);
                    this.message = message;
                };
                TodoListItemView.prototype.editMode = function (value) {
                    if (value) {
                        this.el.classList.add("editing");
                        var input = this.el.querySelector('input');
                        var that_1 = this;
                        input.focus();
                        input.addEventListener('blur', function cancelEditing() {
                            this.removeEventListener('blur', cancelEditing, false);
                            that_1.editMode(false);
                        }, false);
                    }
                    else {
                        this.el.classList.remove("editing");
                    }
                };
                TodoListItemView.prototype.getMessage = function () {
                    return this.message;
                };
                return TodoListItemView;
            }());
            exports_1("TodoListItemView", TodoListItemView);
        }
    };
});
//# sourceMappingURL=TodoListItemView.js.map