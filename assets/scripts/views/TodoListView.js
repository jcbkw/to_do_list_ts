System.register(["./TodoListItemView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoListItemView_1, TodoListView;
    return {
        setters: [
            function (TodoListItemView_1_1) {
                TodoListItemView_1 = TodoListItemView_1_1;
            }
        ],
        execute: function () {
            TodoListView = /** @class */ (function () {
                function TodoListView(parent, externals) {
                    this.parent = parent;
                    this.externals = externals;
                    this.itemTemplate = Handlebars.compile(this.externals.listItemTpl);
                }
                TodoListView.prototype.getElement = function () {
                    return this.parent;
                };
                TodoListView.prototype.render = function () {
                    var _this = this;
                    this.updateTemplate();
                    Object.getOwnPropertyNames(this.externals.contacts).forEach(function (id) {
                        _this.renderContact(_this.externals.contacts[id]);
                    });
                };
                TodoListView.prototype.renderContact = function (contact) {
                    var item = new TodoListItemView_1.TodoListItemView(this.el, this.itemTemplate);
                    item.render(contact);
                };
                TodoListView.prototype.updateTemplate = function () {
                    var template = Handlebars.compile(this.externals.listTpl);
                    var html = template(this.externals.content);
                    this.parent.innerHTML += html;
                    this.el = this.parent.querySelector('.entry-list');
                };
                return TodoListView;
            }());
            exports_1("TodoListView", TodoListView);
        }
    };
});
//# sourceMappingURL=TodoListView.js.map