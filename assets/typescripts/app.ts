import { TodoListController } from "./TodoListController";

(() => {
    let controller = new TodoListController(document);
    controller.render();
})();