System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EventDispatcher;
    return {
        setters: [],
        execute: function () {
            (function () {
                if (typeof window.CustomEvent === "function")
                    return false;
                function CustomEvent(event, params) {
                    params = params || { bubbles: false, cancelable: false, detail: undefined };
                    var evt = document.createEvent('CustomEvent');
                    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                    return evt;
                }
                CustomEvent.prototype = window.Event.prototype;
                window.CustomEvent = CustomEvent;
            })();
            //#endregion
            EventDispatcher = /** @class */ (function () {
                function EventDispatcher() {
                    this._dispatcher = document.createElement('div');
                }
                EventDispatcher.prototype.on = function (type, listener) {
                    this._dispatcher.addEventListener(type, listener, false);
                    return this;
                };
                EventDispatcher.prototype.off = function (type, listener) {
                    this._dispatcher.removeEventListener(type, listener, false);
                    return this;
                };
                EventDispatcher.prototype.trigger = function (type, detail) {
                    this._dispatcher.dispatchEvent(new CustomEvent(type, { detail: detail || {} }));
                    return this;
                };
                return EventDispatcher;
            }());
            exports_1("EventDispatcher", EventDispatcher);
        }
    };
});
//# sourceMappingURL=EventDispatcher.js.map