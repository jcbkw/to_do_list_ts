import { IMessage } from "./IMessage";
import { EventDispatcher } from "../utils/EventDispatcher";

export type MessageMapEvent = 'change';

export class MessageMap extends EventDispatcher {

    constructor (private data: IMessage[]) {
        super();
    }

    public put (message: IMessage) {
        let index = this.findIndex(message.id);
        if (index === -1) {
            this.data.push(message);
        }
        else {
            this.data[index] = message;
        }
        this.trigger('change');
    }

    public patch (message: IMessage) {
        let index = this.findIndex(message.id);
        if (index !== -1) {
            
            this.data[index].status =  2 ? 1 : 2;

        }
      
        this.trigger('change');
    }
    
    public remove (message: IMessage|string) {
        let id = typeof message === 'string' ? message : message.id;
        let index = this.findIndex(id);

        if (index !== -1) {
            this.data.splice(index, 1);
            this.trigger('change');
        }
    }
    
    public getMessageAtIndex (index: number): IMessage {
        return this.data[index];
    }
    
    public size (): number {
        return this.data.length;
    }
    
    public getMessageById (id: string): IMessage {
        return this.data[this.findIndex(id)];
    }

    private findIndex (id: string): number {
        let result = -1;

        this.data.some(function (message: IMessage, index: number): boolean {
            if (message.id === id) {
                result = index;
                return true;
            }
        });

        return result;
    }

}