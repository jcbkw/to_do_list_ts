export class TodoListView implements IView {
    
    constructor (private parent: IView) {
        this.render();
    }
    
    public getElement(): Element {
        return this.el;
    }
    // Maybe I can use map and the REST parameters to dynamically create
    //dom elements on the fly for the render function.
    private render(): void {
       let main = this.parent.getElement();
    }

    private el: Element;
}