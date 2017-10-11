System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MessageStatus;
    return {
        setters: [],
        execute: function () {
            (function (MessageStatus) {
                MessageStatus[MessageStatus["TODO"] = 0] = "TODO";
                MessageStatus[MessageStatus["DOING"] = 1] = "DOING";
                MessageStatus[MessageStatus["DONE"] = 2] = "DONE";
            })(MessageStatus || (MessageStatus = {}));
            exports_1("MessageStatus", MessageStatus);
        }
    };
});
//# sourceMappingURL=MessageStatus.js.map