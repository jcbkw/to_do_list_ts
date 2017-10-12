System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataService;
    return {
        setters: [],
        execute: function () {
            DataService = /** @class */ (function () {
                function DataService() {
                }
                DataService.getTemplate = function (url, callback) {
                    DataService.getText(url, callback);
                };
                DataService.getContent = function (callback) {
                    DataService.getJson("/content.json", callback);
                };
                DataService.getMessages = function (callback) {
                    DataService.getJson("/entries", function (messages) {
                        callback(messages);
                    });
                };
                DataService.createMessage = function (messageText, callback) {
                    DataService.xhrGeneric("POST", "/entries", function (error, result) {
                        var message = null;
                        if (!error) {
                            message = JSON.parse(result);
                        }
                        callback(message);
                    }, { message: messageText });
                };
                DataService.updateMessage = function (updatedMessage, callback) {
                    DataService.xhrGeneric("PUT", "/entries", function (error, result) {
                        var message = null;
                        if (!error) {
                            message = JSON.parse(result);
                        }
                        callback(message);
                    }, updatedMessage);
                };
                DataService.deleteMessage = function (messageId, callback) {
                    DataService.xhrGeneric("DELETE", "/entries", function (error, result) {
                        var message = null;
                        if (!error) {
                            message = JSON.parse(result);
                        }
                        callback(message);
                    }, { id: messageId });
                };
                DataService.getJson = function (url, callback) {
                    DataService.getText(url, function (text) {
                        callback(JSON.parse(text));
                    });
                };
                DataService.getText = function (url, callback) {
                    var xhr = new XMLHttpRequest;
                    xhr.addEventListener("load", function (e) {
                        callback(this.responseText);
                    }, false);
                    xhr.addEventListener("error", function (e) {
                        callback(null);
                    }, false);
                    xhr.open("GET", url, true /*async*/);
                    xhr.send();
                };
                /**
                 * Create a new ajax POST request.
                 * Takes parameters as an *object* Key and values are encoded and passed to the server.
                 * Sends our post with one argument (payload).
                 *
                 * Appends a callback function to an event listener "load" (complete)that has two parameters
                 * - the first parameter is built in error handle
                 * - the second parameter is a capture of the server's response
                 *
                 * returns the xhr object
                 *
                 * @param method
                 * @param url
                 * @param params
                 * @param callback
                 */
                DataService.xhrGeneric = function (method, url, callback, params) {
                    var xhr = new XMLHttpRequest();
                    var payload;
                    xhr.open(method, url, /*async*/ true);
                    xhr.addEventListener("load", function () {
                        callback(/*no error*/ null, this.responseText);
                    });
                    xhr.addEventListener("error", function (error) {
                        callback(error.error);
                    });
                    if (params) {
                        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        payload = [];
                        for (var i in params) {
                            if (params.hasOwnProperty(i)) {
                                payload.push(encodeURIComponent(i) + "=" + encodeURIComponent(params[i]));
                            }
                        }
                        xhr.send(payload.join("&"));
                    }
                    else {
                        xhr.send();
                    }
                };
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    };
});
//# sourceMappingURL=DataService.js.map