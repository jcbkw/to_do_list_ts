export class Layout {

    public getLayout (url: string): void {
        let that = this,
        xml = new XMLHttpRequest;
        xml.addEventListener("load",(e) => {
            e.target.removeEventListener("load");
            this.getContent(e.target);
            console.log(that);
            console.log(this);
            console.log(this.title);
        }, false /*propigation*/);

    };

    private getContent (cTarget) {

        this.title = cTarget.responseText; 
        
    };
    private title: string;
}