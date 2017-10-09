System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Layout;
    return {
        setters: [],
        execute: function () {
            Layout = /** @class */ (function () {
                function Layout() {
                }
                Layout.prototype.getLayout = function (url) {
                    var _this = this;
                    var that = this, xml = new XMLHttpRequest;
                    xml.addEventListener("load", function (e) {
                        e.target.removeEventListener("load");
                        _this.getContent(e.target);
                        console.log(that);
                        console.log(_this);
                        console.log(_this.title);
                    }, false /*propigation*/);
                };
                ;
                Layout.prototype.getContent = function (cTarget) {
                    this.title = cTarget.responseText;
                };
                ;
                return Layout;
            }());
            exports_1("Layout", Layout);
        }
    };
});
//# sourceMappingURL=Layout.js.map