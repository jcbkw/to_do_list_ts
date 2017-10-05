System.register(["./views/Layout", "./views/TodoList"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Layout_1, TodoList_1, TodoListController;
    return {
        setters: [
            function (Layout_1_1) {
                Layout_1 = Layout_1_1;
            },
            function (TodoList_1_1) {
                TodoList_1 = TodoList_1_1;
            }
        ],
        execute: function () {
            TodoListController = /** @class */ (function () {
                function TodoListController(dom) {
                    this.dom = dom;
                }
                TodoListController.prototype.render = function () {
                    var layout = new Layout_1.Layout(this.dom);
                    var mainView = new TodoList_1.TodoList(layout);
                };
                ;
                return TodoListController;
            }());
            exports_1("TodoListController", TodoListController);
        }
    };
});
