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
                DataService.getContacts = function (callback) {
                    DataService.getJson("/entries", function (contacts) {
                        callback(contacts);
                    });
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
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    };
});
//# sourceMappingURL=DataService.js.map