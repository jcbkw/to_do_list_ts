import { TodoListItemView } from "./TodoListItemView";

export class TodoListView {
    
    constructor (private parent: Element, private externals: Externals) {
        this.itemTemplate = Handlebars.compile(this.externals.listItemTpl);
    }
    
    public getElement (): Element {
        return this.parent;    
    }

    public render (): void {

        this.updateTemplate();

        Object.getOwnPropertyNames(this.externals.contacts).forEach((id: string) => {
            
            this.renderContact(this.externals.contacts[id]);

        });
        
    }

    public renderContact (contact: IContact) {

        let item = new TodoListItemView(this.el, this.itemTemplate);
        
        item.render(contact);

    }
    
    private updateTemplate (): void {
        let template = Handlebars.compile(this.externals.listTpl);
        let html = template (this.externals.content);
        this.parent.innerHTML += html;
        this.el = this.parent.querySelector('.entry-list');
    }

    private el: Element;
    private itemTemplate: HandlebarsTemplateDelegate;

}