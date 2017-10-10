export class TodoListItemView {

    constructor (private parent: Element, private template: HandlebarsTemplateDelegate) {}
    
    public getElement (): Element {
        return this.el;
    }

    public render (contact: IContact): void {
        let html = this.template(contact);
        this.parent.innerHTML += html;
        this.el = this.parent.querySelector(`[item-id="${contact.id}"]`);
    }
    
    private el: Element;
}