import { TodoListView } from "./TodoListView";

export class LayoutView {

    constructor (private dom: Document, private externals: Externals) {}
    
    public getElement (): Element {
        return this.el;    
    }

    public render (): void {

        this.updateTemplate();
        
        let list = new TodoListView(this.el.querySelector('.main-content'), this.externals);
        
        list.render();

    }
    
    private updateTemplate (): void {
        let template = Handlebars.compile(this.externals.layoutTpl);
        let html = template (this.externals.content);
        this.dom.body.innerHTML = html;
        this.el = this.dom.body.querySelector('.main-wrapper');
    }

    private el: Element;
    
}