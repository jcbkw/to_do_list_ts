System.register(["./services/DataService", "./views/LayoutView", "./views/TodoListView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataService_1, LayoutView_1, TodoListView_1, TodoListController;
    return {
        setters: [
            function (DataService_1_1) {
                DataService_1 = DataService_1_1;
            },
            function (LayoutView_1_1) {
                LayoutView_1 = LayoutView_1_1;
            },
            function (TodoListView_1_1) {
                TodoListView_1 = TodoListView_1_1;
            }
        ],
        execute: function () {
            TodoListController = /** @class */ (function () {
                function TodoListController(dom) {
                    this.dom = dom;
                }
                TodoListController.prototype.render = function () {
                    var _this = this;
                    var url = "./assets/templates/layout.html";
                    var callback = function () {
                        var layout = new LayoutView_1.LayoutView(_this.dom, data), mainView = new TodoListView_1.TodoListView(layout);
                    };
                    var data = new DataService_1.DataService(url, callback);
                    //data.getTemplate(, function (){});
                };
                ;
                return TodoListController;
            }());
            exports_1("TodoListController", TodoListController);
        }
    };
});
//# sourceMappingURL=TodoListController.js.map