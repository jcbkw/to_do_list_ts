System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoListItemView;
    return {
        setters: [],
        execute: function () {
            TodoListItemView = /** @class */ (function () {
                function TodoListItemView(parent) {
                    this.parent = parent;
                    this.render();
                }
                // public update(listData: IListModel): void{
                // }
                TodoListItemView.prototype.getElement = function () {
                    return this.el;
                };
                TodoListItemView.prototype.render = function () {
                };
                TodoListItemView.prototype.markItem = function (btn) {
                    var _this = this;
                    var row = btn.parentNode.parentNode, id = row.getAttribute("item-id"), status = parseInt(row.getAttribute("item-status"), 10), payload = {
                        id: id,
                        status: status === STATUS_DONE
                            ? STATUS_TODO
                            : STATUS_DONE
                    };
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
                return TodoListItemView;
            }());
            exports_1("TodoListItemView", TodoListItemView);
        }
    };
});
//# sourceMappingURL=TodoListItemView.js.map