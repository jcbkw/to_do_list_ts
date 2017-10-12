import { IMessage } from "../models/IMessage";

export class TodoListItemView {

    constructor (private parent: Element, private template: HandlebarsTemplateDelegate) {}
    
    public getElement (): Element {
        return this.el;
    }

    public render (message: IMessage): void {
        let html = this.template(message);

        // we use a div to parse our HTML template text into an actual DOM Elment
        // that way, we don't have to user .innerHTML of the parent, we can .appendChild
        // with a REAL DOM Element, created form our template
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        // see, now i'm getting my ACTUAL DOM element from the div :)
        this.el = tempDiv.querySelector(`[item-id="${message.id}"]`);

        tempDiv.removeChild(this.el);
        tempDiv = null;

        this.parent.appendChild(this.el);
        this.message = message;
    }

    public editMode (value: boolean): void {

        if (value) {
            this.el.classList.add("editing");

            let input = this.el.querySelector('input');
            let that = this;
            input.focus();
            input.addEventListener('blur', function cancelEditing () {
                this.removeEventListener('blur', cancelEditing, false);
                that.editMode(false);
            }, false);
            
        }
        else {
            this.el.classList.remove("editing");
        }

    }

    public getMessage (): IMessage {
        return this.message;
    }
    
    private message: IMessage;
    private el: Element;
}