System.register(["./TodoListView", "../utils/EventDispatcher", "../models/MessageStatus"], function (exports_1, context_1) {
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
    var TodoListView_1, EventDispatcher_1, MessageStatus_1, LayoutView;
    return {
        setters: [
            function (TodoListView_1_1) {
                TodoListView_1 = TodoListView_1_1;
            },
            function (EventDispatcher_1_1) {
                EventDispatcher_1 = EventDispatcher_1_1;
            },
            function (MessageStatus_1_1) {
                MessageStatus_1 = MessageStatus_1_1;
            }
        ],
        execute: function () {
            LayoutView = /** @class */ (function (_super) {
                __extends(LayoutView, _super);
                function LayoutView(dom, externals) {
                    var _this = _super.call(this) || this;
                    _this.dom = dom;
                    _this.externals = externals;
                    return _this;
                }
                LayoutView.prototype.getElement = function () {
                    return this.el;
                };
                LayoutView.prototype.render = function () {
                    this.updateTemplate();
                    this.list = new TodoListView_1.TodoListView(this.el.querySelector('.main-content'), this.externals);
                    this.list.render();
                };
                LayoutView.prototype.updateTemplate = function () {
                    if (!this.el) {
                        var template = Handlebars.compile(this.externals.layoutTpl);
                        var html = template(this.externals.content);
                        this.dom.body.innerHTML = html;
                        this.el = this.dom.body.querySelector('.main-wrapper');
                        // attach to dom
                        this.el.addEventListener('submit', this.handleSubmit.bind(this), false);
                        this.el.addEventListener('click', this.handleClicks.bind(this), false);
                        this.el.addEventListener('change', this.handleChanges.bind(this), false);
                    }
                };
                LayoutView.prototype.handleSubmit = function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    this.trigger('new_entry', { value: e.target.message.value });
                };
                LayoutView.prototype.handleClicks = function (e) {
                    var target = e.target;
                    var id = this.findMessageId(target);
                    if (target.classList.contains('delete-item')) {
                        this.trigger('delete_entry', { value: id });
                    }
                    else if (target.classList.contains('check-item')) {
                        var message = this.externals.messages.getMessageById(id);
                        // toggle the message status before sending it to the server
                        message.status = (new MessageStatus_1.MessageStatus(message.status)).toggle();
                        this.trigger('update_entry', { value: message });
                    }
                    else if (target.classList.contains('edit-item')) {
                        this.list.getItemView(id).editMode(true);
                    }
                };
                LayoutView.prototype.handleChanges = function (e) {
                    var target = e.target;
                    var id = this.findMessageId(target);
                    var message = this.externals.messages.getMessageById(id);
                    // toggle the message status before sending it to the server
                    message.message = target.value;
                    this.trigger('update_entry', { value: message });
                };
                LayoutView.prototype.findMessageId = function (target) {
                    while (true) {
                        var parent_1 = target.parentElement;
                        if (!parent_1) {
                            break;
                        }
                        if (parent_1.classList.contains('row')) {
                            return parent_1.getAttribute('item-id');
                        }
                        target = parent_1;
                    }
                    return null;
                };
                return LayoutView;
            }(EventDispatcher_1.EventDispatcher));
            exports_1("LayoutView", LayoutView);
        }
    };
});
//# sourceMappingURL=LayoutView.js.map