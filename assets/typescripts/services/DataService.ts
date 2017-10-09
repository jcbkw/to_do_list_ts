export class DataService {
    
    public data: {template: string, content: string};
    
    constructor (private url: string, callback: Function) {
        
        this.getTemplate(url, callback);
        this.data =  {template: "", content: ""};
        
    };
    
    public getTemplate (url:string, callback: Function) {
        let xhr = new XMLHttpRequest;
        
        xhr.addEventListener("load", (e) => {
            this.data.template =  xhr.responseText;
            this.getContent(callback);
            
        }, false);
        
        xhr.open("GET", url, true /*async*/);
        xhr.send();
        
    }
    
    private getContent (callback: Function) {
        
        let xhr = new XMLHttpRequest;
        
        xhr.addEventListener("load", (e) => {
            console.log(xhr);
            let compiledTPL = Handlebars.compile(this.data.template);
            this.data.content = compiledTPL(JSON.parse(xhr.responseText));
            //console.log(update);            
            debugger;
            callback();
        }, false);
        
        xhr.open("GET", "/content.json", true /*async*/);
        xhr.send();
    }
  
}