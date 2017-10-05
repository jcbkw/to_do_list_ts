export class TodoList implements IView {
    
    constructor (private parent: IView, 
        private title: string ="",
        private entries: object = {}
        ) {
        this.render();
    }
    
    public getElement(): Element {
        return this.el;
    }
    // Maybe I can use map and the REST parameters to dynamically create
    //dom elements on the fly for the render function.
    private render(): void {
        
        this.el_section = document.createElement("section");
        this.el_section2 = document.createElement("section");
        this.el_section3 = document.createElement("section");
        this.el_figure = document.createElement("figure");
        this.el_header = document.createElement("header");
        this.el_input = document.createElement("input");
        this.el_section = document.createElement("section");
        this.el_button = document.createElement("button");
        this.el_h1 = document.createElement("h1");
        this.el_entryTable = document.createElement("ul");
        this.el_listTitle = document.createElement("title");
        this.el_div = document.createElement("div");
        this.el_buttonWrapper = document.createElement("div");
        this.el_li = document.createElement("li");
        this.el_entryRow = document.createElement("li");
        this.el_inputWrapper = document.createElement("div");
        this.el_itemList = document.createElement("ul");
        this.el_form = document.createElement("form");
        
        this.el_figure.appendChild(this.el_div);
        this.el_button.appendChild(this.el_figure);
        this.el_inputWrapper.appendChild(this.el_input);
        this.el_buttonWrapper.appendChild(this.el_button);
        this.el_entryRow.appendChild(this.el_input);
        this.el_entryRow.appendChild(this.el_buttonWrapper);
        this.el_h1.appendChild(this.el_listTitle);
        this.el_header.appendChild(this.el_h1);
        this.el_entryTable.appendChild(this.el_entryRow);
        this.el_form.appendChild(this.el_entryTable);
        this.el_section.appendChild(this.el_header);
        this.el_section2.appendChild(this.el_form);
        this.el_section2.appendChild(this.el_itemList);
        
        this.parent.getElement().appendChild(this.el_section);        
        this.parent.getElement().appendChild(this.el_section2);        
    }
    
    private el: Element;
    private el_buttonWrapper: HTMLDivElement;
    private el_div: HTMLDivElement;
    private el_li: HTMLLIElement;
    private el_listTitle: HTMLTitleElement;
    private el_entryTable: HTMLUListElement;
    private el_h1: HTMLHeadingElement;
    private el_button: HTMLButtonElement;
    private el_input: HTMLInputElement;
    private el_header: HTMLElement;
    private el_figure: HTMLElement;
    private el_section3: HTMLElement;
    private el_section2: HTMLElement;
    private el_section: HTMLElement;
    private el_main: HTMLElement;
    private el_itemList: HTMLUListElement;
    private el_inputWrapper: HTMLDivElement;
    private el_entryRow: HTMLLIElement;
    private el_form: HTMLFormElement;
}