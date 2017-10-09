import {DataService} from "./services/DataService";
import { LayoutView } from "./views/LayoutView";
import { DefaultTodoList} from "./models/defaultTodoList";
import { TodoListView } from "./views/TodoListView";


export class TodoListController {

    constructor (private dom: Document) {
    }

    public render ():void {
        let url = "./assets/templates/layout.html";
        let callback = () => {
            
            let layout = new LayoutView(this.dom, data),
            mainView = new TodoListView(layout);
            
        }
        let data = new DataService(url, callback);
        //data.getTemplate(, function (){});
    };
}