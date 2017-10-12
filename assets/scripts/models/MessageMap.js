System.register(["../utils/EventDispatcher"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var EventDispatcher_1, MessageMap;
    return {
        setters: [
            function (EventDispatcher_1_1) {
                EventDispatcher_1 = EventDispatcher_1_1;
            }
        ],
        execute: function () {
            MessageMap = /** @class */ (function (_super) {
                __extends(MessageMap, _super);
                function MessageMap(data) {
                    var _this = _super.call(this) || this;
                    _this.data = data;
                    return _this;
                }
                MessageMap.prototype.put = function (message) {
                    var index = this.findIndex(message.id);
                    if (index === -1) {
                        this.data.push(message);
                    }
                    else {
                        this.data[index] = message;
                    }
                    this.trigger('change');
                };
                MessageMap.prototype.patch = function (message) {
                    var index = this.findIndex(message.id);
                    if (index !== -1) {
                        this.data[index].status = 2 ? 1 : 2;
                    }
                    this.trigger('change');
                };
                MessageMap.prototype.remove = function (message) {
                    var id = typeof message === 'string' ? message : message.id;
                    var index = this.findIndex(id);
                    if (index !== -1) {
                        this.data.splice(index, 1);
                        this.trigger('change');
                    }
                };
                MessageMap.prototype.getMessageAtIndex = function (index) {
                    return this.data[index];
                };
                MessageMap.prototype.size = function () {
                    return this.data.length;
                };
                MessageMap.prototype.getMessageById = function (id) {
                    return this.data[this.findIndex(id)];
                };
                MessageMap.prototype.findIndex = function (id) {
                    var result = -1;
                    this.data.some(function (message, index) {
                        if (message.id === id) {
                            result = index;
                            return true;
                        }
                    });
                    return result;
                };
                return MessageMap;
            }(EventDispatcher_1.EventDispatcher));
            exports_1("MessageMap", MessageMap);
        }
    };
});
//# sourceMappingURL=MessageMap.js.map