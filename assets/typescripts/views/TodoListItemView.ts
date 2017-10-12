import { IMessage } from "../models/IMessage";

export class TodoListItemView {

    constructor (private parent: Element, private template: HandlebarsTemplateDelegate) {}
    
    public getElement (): Element {
        return this.el;
    }

    public render (message: IMessage): void {
        let html = this.template(message);
        this.parent.innerHTML += html;
        this.el = this.parent.querySelector(`[item-id="${message.id}"]`);
    }
    
    private el: Element;
}