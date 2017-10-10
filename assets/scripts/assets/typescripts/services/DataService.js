System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataService;
    return {
        setters: [],
        execute: function () {
            DataService = /** @class */ (function () {
                function DataService(url, callback) {
                    this.url = url;
                    this.getTemplate(url, callback);
                    this.data = { template: "", content: "" };
                }
                ;
                DataService.prototype.getTemplate = function (url, callback) {
                    var _this = this;
                    var xhr = new XMLHttpRequest;
                    xhr.addEventListener("load", function (e) {
                        _this.data.template = xhr.responseText;
                        _this.getContent(callback);
                    }, false);
                    xhr.open("GET", url, true /*async*/);
                    xhr.send();
                };
                DataService.prototype.getContent = function (callback) {
                    var _this = this;
                    var xhr = new XMLHttpRequest;
                    xhr.addEventListener("load", function (e) {
                        console.log(xhr);
                        var compiledTPL = Handlebars.compile(_this.data.template);
                        _this.data.content = compiledTPL(JSON.parse(xhr.responseText));
                        //console.log(update);            
                        debugger;
                        callback();
                    }, false);
                    xhr.open("GET", "/content.json", true /*async*/);
                    xhr.send();
                };
                DataService.prototype.updateList = function (url, payload, callback) {
                    this.
                    ;
                };
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    };
});
//# sourceMappingURL=DataService.js.map