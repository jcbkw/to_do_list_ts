import{DataService} from "../services/DataService"
export class LayoutView {

    constructor (private dom: Document, private data: DataService) {
        this.render();
    }
    
    public getElement (): Element {
        return this.el;    
    }

    public getClass (): Element {
        return this.el;    
    }

    public updateTemplate ():void {

         let templateSetup = this.data;
         this.dom.body.innerHTML = templateSetup.data.content;
        
    }
    
    public getContent (contentdata: string): void {
        this.content = contentdata;
        let compiledtmlp = Handlebars.compile(this.template);
               
    }

    private render (): void {
        
        this.updateTemplate();
    }

    private el: Element;
    private template: string;
    private content: string;
}