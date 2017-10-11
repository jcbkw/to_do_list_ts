System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ErrorService;
    return {
        setters: [],
        execute: function () {
            ErrorService = /** @class */ (function () {
                function ErrorService() {
                }
                ErrorService.broadcast = function (message) {
                    console.log(message);
                };
                return ErrorService;
            }());
            exports_1("ErrorService", ErrorService);
        }
    };
});
//# sourceMappingURL=ErrorService.js.map