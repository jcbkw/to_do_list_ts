System.register(["./services/DataService", "./views/LayoutView", "./models/MessageMap", "./services/ErrorService", "./models/MessageStatus"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataService_1, LayoutView_1, MessageMap_1, ErrorService_1, MessageStatus_1, TodoListController;
    return {
        setters: [
            function (DataService_1_1) {
                DataService_1 = DataService_1_1;
            },
            function (LayoutView_1_1) {
                LayoutView_1 = LayoutView_1_1;
            },
            function (MessageMap_1_1) {
                MessageMap_1 = MessageMap_1_1;
            },
            function (ErrorService_1_1) {
                ErrorService_1 = ErrorService_1_1;
            },
            function (MessageStatus_1_1) {
                MessageStatus_1 = MessageStatus_1_1;
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
                    this.watchEvents(layout, externals);
                };
                TodoListController.prototype.watchEvents = function (layout, externals) {
                    layout
                        .on('new_entry', function (e) {
                        debugger;
                        DataService_1.DataService.createMessage(e.detail.value, function (message) {
                            if (!message) {
                                ErrorService_1.ErrorService.broadcast("Sorry, we could not save your message.\n                            'Please try again later!");
                            }
                            else {
                                externals.messages.put(message);
                            }
                        });
                    })
                        .on('delete_entry', function (e) {
                        DataService_1.DataService.deleteMessage(e.detail.value, function (message) {
                            if (!message) {
                                ErrorService_1.ErrorService.broadcast("Sorry, we could not delete your message.\n                            'Please try again later!");
                            }
                            else {
                                externals.messages.remove(message.id);
                            }
                        });
                    })
                        .on('update_entry', function (e) {
                        var message = e.detail.value;
                        // toggle the message status before sending it to the server
                        message.status = (new MessageStatus_1.MessageStatus(message.status)).toggle();
                        DataService_1.DataService.updateMessage(message, function (message) {
                            if (!message) {
                                ErrorService_1.ErrorService.broadcast("Sorry, we could not save your message.\n                            'Please try again later!");
                            }
                            else {
                                externals.messages.put(message);
                            }
                        });
                    });
                };
                TodoListController.prototype.loadExternals = function (callback) {
                    DataService_1.DataService.getTemplate("./assets/templates/layout.html", function (layoutTpl) {
                        DataService_1.DataService.getTemplate("./assets/templates/listItem.html", function (listItemTpl) {
                            DataService_1.DataService.getTemplate("./assets/templates/list.html", function (listTpl) {
                                DataService_1.DataService.getMessages(function (messages) {
                                    DataService_1.DataService.getContent(function (content) {
                                        callback({
                                            listItemTpl: listItemTpl,
                                            layoutTpl: layoutTpl,
                                            listTpl: listTpl,
                                            content: content,
                                            messages: new MessageMap_1.MessageMap(messages)
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