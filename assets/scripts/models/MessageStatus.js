System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MessageStatusType, MessageStatus;
    return {
        setters: [],
        execute: function () {
            (function (MessageStatusType) {
                MessageStatusType[MessageStatusType["TODO"] = 0] = "TODO";
                MessageStatusType[MessageStatusType["DOING"] = 1] = "DOING";
                MessageStatusType[MessageStatusType["DONE"] = 2] = "DONE";
            })(MessageStatusType || (MessageStatusType = {}));
            exports_1("MessageStatusType", MessageStatusType);
            MessageStatus = /** @class */ (function () {
                function MessageStatus(type) {
                    this.type = type;
                }
                ;
                MessageStatus.prototype.toggle = function () {
                    return this.type === MessageStatusType.DONE ? MessageStatusType.TODO : MessageStatusType.DONE;
                };
                return MessageStatus;
            }());
            exports_1("MessageStatus", MessageStatus);
        }
    };
});
//# sourceMappingURL=MessageStatus.js.map