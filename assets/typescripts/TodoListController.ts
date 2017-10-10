import {DataService} from "./services/DataService";
import { LayoutView } from "./views/LayoutView";

export class TodoListController {

    constructor (private dom: Document) {}

    public render ():void {
        
       this.loadExternals(this.start.bind(this));
             

    };

    private start (externals: Externals): void {

        let layout = new LayoutView(this.dom, externals);

        layout.render();

    }

    private loadExternals (callback: (externals: Externals) => any) : void {

        DataService.getTemplate("./assets/templates/layout.html", (layoutTpl: string) => {
            
            DataService.getTemplate("./assets/templates/listItem.html", (listItemTpl: string) => {

                DataService.getTemplate("./assets/templates/list.html", (listTpl: string) => {

                    DataService.getContacts((contact: IContactMap) => {
                        
                        DataService.getContent((content: object) => {
        
                            callback({
                                listItemTpl: listItemTpl, 
                                layoutTpl: layoutTpl, 
                                listTpl: listTpl, 
                                contacts: contact,
                                content: content
                            });
                            
                        });

                    });

                });
                        
            });
            
        });

    }

}