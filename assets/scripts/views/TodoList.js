System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoList;
    return {
        setters: [],
        execute: function () {
            TodoList = /** @class */ (function () {
                function TodoList(parent, title, entries) {
                    if (title === void 0) { title = ""; }
                    if (entries === void 0) { entries = {}; }
                    this.parent = parent;
                    this.title = title;
                    this.entries = entries;
                    this.render();
                }
                TodoList.prototype.getElement = function () {
                    return this.el;
                };
                // Maybe I can use map and the REST parameters to dynamically create
                //dom elements on the fly for the render function.
                TodoList.prototype.render = function () {
                    this.el_section = document.createElement("section");
                    this.el_section2 = document.createElement("section");
                    this.el_section3 = document.createElement("section");
                    this.el_figure = document.createElement("figure");
                    this.el_header = document.createElement("header");
                    this.el_input = document.createElement("input");
                    this.el_section = document.createElement("section");
                    this.el_button = document.createElement("button");
                    this.el_h1 = document.createElement("h1");
                    this.el_entryTable = document.createElement("ul");
                    this.el_listTitle = document.createElement("title");
                    this.el_div = document.createElement("div");
                    this.el_buttonWrapper = document.createElement("div");
                    this.el_li = document.createElement("li");
                    this.el_entryRow = document.createElement("li");
                    this.el_inputWrapper = document.createElement("div");
                    this.el_itemList = document.createElement("ul");
                    this.el_form = document.createElement("form");
                    this.el_figure.appendChild(this.el_div);
                    this.el_button.appendChild(this.el_figure);
                    this.el_inputWrapper.appendChild(this.el_input);
                    this.el_buttonWrapper.appendChild(this.el_button);
                    this.el_entryRow.appendChild(this.el_input);
                    this.el_entryRow.appendChild(this.el_buttonWrapper);
                    this.el_h1.appendChild(this.el_listTitle);
                    this.el_header.appendChild(this.el_h1);
                    this.el_entryTable.appendChild(this.el_entryRow);
                    this.el_form.appendChild(this.el_entryTable);
                    this.el_section.appendChild(this.el_header);
                    this.el_section2.appendChild(this.el_form);
                    this.el_section2.appendChild(this.el_itemList);
                    this.parent.getElement().appendChild(this.el_section);
                    this.parent.getElement().appendChild(this.el_section2);
                };
                return TodoList;
            }());
            exports_1("TodoList", TodoList);
        }
    };
});
