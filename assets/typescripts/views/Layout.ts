export class Layout {

    constructor (private dom: Document) {
        this.render();
        
    }
    
    public getElement (): Element {
        return this.el;    
    }

    public getClass (): Element {
        return this.el;    
    }

    public getTemplate (url): void {
        
        let xml = new XMLHttpRequest;

        xml.addEventListener("load", (e) => {

            this.dom.body.innerHTML = xml.responseText;
            
        }, false);

        xml.open("GET", url);
        xml.send();
        
    }

    private render (): void {
        
        this.getTemplate("/assets/templates/Layout.html");
        
    }

    private el: Element;
    private template: string;
}