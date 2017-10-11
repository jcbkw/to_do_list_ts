import { TodoListItemView } from "./TodoListItemView";
import { IMessage } from "../models/IMessage";
import { Externals } from "../models/IExternals";

export class TodoListView {
    
    constructor (private parent: Element, private externals: Externals) {
        this.itemTemplate = Handlebars.compile(this.externals.listItemTpl);
    }
    
    public getElement (): Element {
        return this.parent;    
    }

    public render (): void {

        this.updateTemplate();
        
        let messages = this.externals.messages;

        for (let i = 0, c = messages.size(); i < c; i += 1) {

            this.renderContact(messages.getMessageAtIndex(i));

        }

    }

    public renderContact (contact: IMessage) {

        let item = new TodoListItemView(this.el, this.itemTemplate);
        
        item.render(contact);

    }
    
    private updateTemplate (): void {
        if (this.el) {
            this.el.innerHTML = '';
        }
        else {
            let template = Handlebars.compile(this.externals.listTpl);
            let html = template (this.externals.content);
            this.parent.innerHTML += html;
            this.el = this.parent.querySelector('.entry-list');

            // link this class to the model
            this.externals.messages.on('change', this.render.bind(this));
        }
    }

    private el: Element;
    private itemTemplate: HandlebarsTemplateDelegate;

}