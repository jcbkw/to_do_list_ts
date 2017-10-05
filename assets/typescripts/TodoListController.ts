import { Layout } from "./views/Layout";
import { TodoList } from "./views/TodoList";


export class TodoListController {

    constructor (private dom: Document) {
    }

    public render ():void {
        let layout = new Layout(this.dom);
        let mainView = new TodoList(layout);
    };
}