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
                    this.updateTemplate();
                    var messages = this.externals.messages;
                    this.messageViews = {};
                    for (var i = 0, c = messages.size(); i < c; i += 1) {
                        this.renderContact(messages.getMessageAtIndex(i));
                    }
                };
                TodoListView.prototype.renderContact = function (message) {
                    var item = new TodoListItemView_1.TodoListItemView(this.el, this.itemTemplate);
                    item.render(message);
                    this.messageViews[message.id] = item;
                };
                TodoListView.prototype.getItemView = function (id) {
                    return this.messageViews[id] || null;
                };
                TodoListView.prototype.updateTemplate = function () {
                    if (this.el) {
                        this.el.innerHTML = '';
                    }
                    else {
                        var template = Handlebars.compile(this.externals.listTpl);
                        var html = template(this.externals.content);
                        this.parent.innerHTML += html;
                        this.el = this.parent.querySelector('.entry-list');
                        // link this class to the model
                        this.externals.messages.on('change', this.render.bind(this));
                    }
                };
                return TodoListView;
            }());
            exports_1("TodoListView", TodoListView);
        }
    };
});
//# sourceMappingURL=TodoListView.js.map