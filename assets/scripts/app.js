System.register(["./TodoListController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoListController_1;
    return {
        setters: [
            function (TodoListController_1_1) {
                TodoListController_1 = TodoListController_1_1;
            }
        ],
        execute: function () {
            (new TodoListController_1.TodoListController(document)).render();
        }
    };
});
//# sourceMappingURL=app.js.map