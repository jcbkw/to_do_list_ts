System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ListView;
    return {
        setters: [],
        execute: function () {
            ListView = /** @class */ (function () {
                function ListView(parent, externals) {
                    this.parent = parent;
                    this.externals = externals;
                    this.render();
                }
                ListView.prototype.getElement = function () {
                    return this.el;
                };
                ListView.prototype.getClass = function () {
                    return this.el;
                };
                ListView.prototype.updateTemplate = function () {
                    var template = Handlebars.compile(this.externals.layoutTpl);
                    var html = template(this.externals.content);
                    this.dom.body.innerHTML = html;
                };
                ListView.prototype.render = function () {
                    this.updateTemplate();
                };
                return ListView;
            }());
            exports_1("ListView", ListView);
        }
    };
});
//# sourceMappingURL=ListView.js.map