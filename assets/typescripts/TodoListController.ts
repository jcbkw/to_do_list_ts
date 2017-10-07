import { Layout } from "./views/Layout";
import { TodoListView } from "./views/TodoListView";


export class TodoListController {
debugger;
    constructor (private dom: Document) {
    }

    public render ():void {
        let layout = new Layout(this.dom),
            mainView = new TodoListView(layout);
    };
}