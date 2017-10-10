System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DefaultTodoList;
    return {
        setters: [],
        execute: function () {
            DefaultTodoList = /** @class */ (function () {
                function DefaultTodoList() {
                }
                //public entries: object;
                // private getTitle () {
                //     let xhr = new XMLHttpRequest,
                //     response: string;
                //     xhr.addEventListener("load", (e) => {
                //        response =  xhr.responseText;
                //        return response;
                //     })
                // }
                DefaultTodoList.prototype.update = function (title) {
                    this.title = title;
                };
                return DefaultTodoList;
            }());
            exports_1("DefaultTodoList", DefaultTodoList);
        }
    };
});
//# sourceMappingURL=defaultTodoList.js.map