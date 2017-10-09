System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoListItemView;
    return {
        setters: [],
        execute: function () {
            TodoListItemView = /** @class */ (function () {
                function TodoListItemView(parent) {
                    this.parent = parent;
                    this.render();
                }
                // public update(listData: IListModel): void{
                // }
                TodoListItemView.prototype.getElement = function () {
                    return this.el;
                };
                TodoListItemView.prototype.render = function () {
                    var checkElement = document.createElement("button"), editElement = document.createElement("button"), deleteElement = document.createElement("button"), deleteColumn = document.createElement("button"), todoMessage = document.createElement("span"), checkColumn = document.createElement("div"), editColumn = document.createElement("div"), listText = document.createTextNode(""), column = document.createElement("div"), row = document.createElement("li");
                    todoMessage.appendChild(listText);
                    column.appendChild(todoMessage);
                    checkColumn.appendChild(checkElement);
                    deleteColumn.appendChild(deleteElement);
                    editColumn.appendChild(editElement);
                    row.appendChild(checkColumn);
                    row.appendChild(column);
                    row.appendChild(editColumn);
                    row.appendChild(deleteColumn);
                };
                return TodoListItemView;
            }());
            exports_1("TodoListItemView", TodoListItemView);
        }
    };
});
//# sourceMappingURL=TodoListItemView.js.map