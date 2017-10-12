import { DataService } from "./services/DataService";// Class manages data XMLHTTPRequests to the server.
import { LayoutView } from "./views/LayoutView";// Manages the base html boilerplate and broadcasts DOM events.
import { MessageMap } from "./models/MessageMap";
import { IMessage } from "./models/IMessage";
import { Externals } from "./models/IExternals";
import { ErrorService } from "./services/ErrorService";
import { MessageStatus } from "./models/MessageStatus";

declare global {
    interface Window { externals: any; }
}

export class TodoListController {

    constructor (private dom: Document) {}

    public render ():void {
        
       this.loadExternals(this.start.bind(this));
       
    };

    private start (externals: Externals): void {

        let layout = new LayoutView(this.dom, externals);

        layout.render();

        this.watchEvents(layout, externals);

    }

    private watchEvents (layout: LayoutView, externals: Externals) {

        layout
            .on('new_entry', (e: CustomEvent) => {
                DataService.createMessage(e.detail.value, (message: IMessage) => {
                    if (!message) {
                        ErrorService.broadcast(`Sorry, we could not save your message.
                            'Please try again later!`);
                    }
                    else {
                        externals.messages.put(message);
                    }
                });
            })
            .on('delete_entry', (e: CustomEvent) => {
                DataService.deleteMessage(e.detail.value, (message: IMessage) => {
                    if (!message) {
                        ErrorService.broadcast(`Sorry, we could not delete your message.
                            'Please try again later!`);
                    }
                    else {
                        externals.messages.remove(message.id);
                    }
                });
            })
            .on('update_entry', (e: CustomEvent) => {

                DataService.updateMessage(e.detail.value, (message: IMessage) => {
                    if (!message) {
                        ErrorService.broadcast(`Sorry, we could not save your message.
                            'Please try again later!`);
                    }
                    else {
                        externals.messages.put(message);
                    }
                });
            })
            .on('edit_entry', (e: CustomEvent) => {
                
                let message = e.detail.value as IMessage;

                // toggle the message status before sending it to the server
                message.status = (new MessageStatus(message.status)).toggle();

                DataService.updateMessage(message, (message: IMessage) => {
                    if (!message) {
                        ErrorService.broadcast(`Sorry, we could not save your message.
                            'Please try again later!`);
                    }
                    else {
                        externals.messages.put(message);
                    }
                });
            });

    }

    private loadExternals (callback: (externals: Externals) => any) : void {

        DataService.getTemplate("./assets/templates/layout.html", (layoutTpl: string) => {
            
            DataService.getTemplate("./assets/templates/listItem.html", (listItemTpl: string) => {

                DataService.getTemplate("./assets/templates/list.html", (listTpl: string) => {

                    DataService.getMessages((messages: IMessage[]) => {
                        
                        DataService.getContent((content: object) => {
        
                            callback({
                                listItemTpl: listItemTpl, 
                                layoutTpl: layoutTpl, 
                                listTpl: listTpl, 
                                content: content,
                                messages: new MessageMap(messages)
                            });
                            
                        });

                    });

                });
                        
            });
            
        });

    }

}