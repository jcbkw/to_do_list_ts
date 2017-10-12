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
        
        this.list = new TodoListView(this.el.querySelector('.main-content'), this.externals);
        
        this.list.render();

    }
    
    private updateTemplate (): void {
        if (!this.el) {
            let template = Handlebars.compile(this.externals.layoutTpl);
            let html = template (this.externals.content);
            this.dom.body.innerHTML = html;
            this.el = this.dom.body.querySelector('.main-wrapper');

            // attach to dom
            
            this.el.addEventListener('submit', this.handleSubmit.bind(this), false);
            this.el.addEventListener('click',  this.handleClicks.bind(this), false);
            this.el.addEventListener('change',  this.handleChanges.bind(this), false);
        }
    }

    private handleSubmit (e: Event) {
        e.stopPropagation();
        e.preventDefault();

        this.trigger('new_entry', {value: (e.target as HTMLFormElement).message.value});
    }

    private handleClicks (e: Event) {
        
        let target: Element = e.target as Element;
        let id = this.findMessageId(target);
        
        if (target.classList.contains('delete-item')) {
            if (confirm("Are you sure that you want delete this item?")) {
                
                this.trigger('delete_entry', {value: id});
                
            }
        }
        else if (target.classList.contains('check-item')) {

            let message = this.externals.messages.getMessageById(id);
            
            // toggle the message status before sending it to the server
            message.status = (new MessageStatus(message.status)).toggle();

            this.trigger('update_entry', {value: message});
        }
        else if (target.classList.contains('edit-item')) {
            this.list.getItemView(id).editMode(true);
        }

    }

    private handleChanges (e: Event) {

        let target: HTMLInputElement = e.target as HTMLInputElement;
        let id = this.findMessageId(target);
        let message = this.externals.messages.getMessageById(id);
        
        // toggle the message status before sending it to the server
        message.message = target.value;

        this.trigger('update_entry', {value: message});

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
    private list: TodoListView;
    
}