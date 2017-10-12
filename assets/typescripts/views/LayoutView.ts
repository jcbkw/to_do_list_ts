import { TodoListView } from "./TodoListView";
import { Externals } from "../models/IExternals";
import { EventDispatcher } from "../utils/EventDispatcher";
import { IMessage } from "../models/IMessage";
import { MessageStatus } from "../models/MessageStatus";

export class LayoutView extends EventDispatcher {

    constructor (private dom: Document, private externals: Externals) {
        super();
    }
    
    public getElement (): Element {
        return this.el;    
    }

    public render (): void {

        this.updateTemplate();
        
        let list = new TodoListView(this.el.querySelector('.main-content'), this.externals);
        
        list.render();

    }
    
    private updateTemplate (): void {
        if (!this.el) {
            let template = Handlebars.compile(this.externals.layoutTpl);
            let html = template (this.externals.content);
            this.dom.body.innerHTML = html;
            this.el = this.dom.body.querySelector('.main-wrapper');

            // attach to dom
            debugger;
            this.el.addEventListener('submit', this.handleSubmit.bind(this), false);
            this.el.addEventListener('click',  this.handleClicks.bind(this), false);
        }
    }

    private handleSubmit (e: Event) {
        e.stopPropagation();
        e.preventDefault();

        this.trigger('new_entry', {value: (e.target as HTMLFormElement).message.value});
    }

    private handleClicks (e: Event) {
        e.stopPropagation();
        e.preventDefault();
        
        let target: Element = e.target as Element;
        let id = this.findMessageId(target);
        
        if (target.classList.contains('delete-item')) {
            this.trigger('delete_entry', {value: id});
        }
        else if (target.classList.contains('check-item')) {
            this.trigger('update_entry', {value: this.externals.messages.getMessageById(id)});
        }
        else if (target.classList.contains('edit-item')) {

        }

    }

    private findMessageId (target: Element): string {

        while (true) {
            let parent: Element = target.parentElement;

            if (!parent) {
                break;
            }
            
            if (parent.classList.contains('row')) {
                return parent.getAttribute('item-id');
            }

            target = parent;
        }

        return null;

    }

    private el: Element;
    
}