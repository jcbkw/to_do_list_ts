import { IMessage } from "../models/IMessage";

export class TodoListItemView {

    constructor (private parent: Element, private template: HandlebarsTemplateDelegate) {}
    
    public getElement (): Element {
        return this.el;
    }

    public render (contact: IMessage): void {
        let html = this.template(contact);
        this.parent.innerHTML += html;
        this.el = this.parent.querySelector(`[item-id="${contact.id}"]`);
    }
    
    private el: Element;
}