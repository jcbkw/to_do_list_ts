System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoList;
    return {
        setters: [],
        execute: function () {
            TodoList = /** @class */ (function () {
                function TodoList() {
                }
                ;
                TodoList.prototype.getStatus = function (id, status) {
                    this.payload.status = status === TodoList.STATUS_DOING
                        ? TodoList.STATUS_TODO
                        : TodoList.STATUS_DONE;
                };
                ;
                TodoList.STATUS_TODO = 0;
                TodoList.STATUS_DOING = 1;
                TodoList.STATUS_DONE = 2;
                return TodoList;
            }());
            exports_1("TodoList", TodoList);
        }
    };
});
//# sourceMappingURL=TodoList.js.map