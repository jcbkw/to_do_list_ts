System.register(["./services/DataService", "./views/LayoutView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataService_1, LayoutView_1, TodoListController;
    return {
        setters: [
            function (DataService_1_1) {
                DataService_1 = DataService_1_1;
            },
            function (LayoutView_1_1) {
                LayoutView_1 = LayoutView_1_1;
            }
        ],
        execute: function () {
            TodoListController = /** @class */ (function () {
                function TodoListController(dom) {
                    this.dom = dom;
                }
                TodoListController.prototype.render = function () {
                    this.loadExternals(this.start.bind(this));
                };
                ;
                TodoListController.prototype.start = function (externals) {
                    var layout = new LayoutView_1.LayoutView(this.dom, externals);
                    layout.render();
                };
                TodoListController.prototype.loadExternals = function (callback) {
                    DataService_1.DataService.getTemplate("./assets/templates/layout.html", function (layoutTpl) {
                        DataService_1.DataService.getTemplate("./assets/templates/listItem.html", function (listItemTpl) {
                            DataService_1.DataService.getTemplate("./assets/templates/list.html", function (listTpl) {
                                DataService_1.DataService.getContacts(function (contact) {
                                    DataService_1.DataService.getContent(function (content) {
                                        callback({
                                            listItemTpl: listItemTpl,
                                            layoutTpl: layoutTpl,
                                            listTpl: listTpl,
                                            contacts: contact,
                                            content: content
                                        });
                                    });
                                });
                            });
                        });
                    });
                };
                return TodoListController;
            }());
            exports_1("TodoListController", TodoListController);
        }
    };
});
//# sourceMappingURL=TodoListController.js.map