export class TodoListItemView {

    constructor(private parent: HTMLLIElement){
        this.render();
    }
    
    // public update(listData: IListModel): void{
        
    // }
    
    public getElement(): Element {
        return this.el;
    }
    
    private render(): void{

        let checkElement = document.createElement("button"),
        editElement = document.createElement("button"),
        deleteElement = document.createElement("button"),
        deleteColumn = document.createElement("button"),
        todoMessage = document.createElement("span"),
        checkColumn = document.createElement("div"),
        editColumn = document.createElement("div"),
        listText = document.createTextNode(""),
        column = document.createElement("div"),
        row = document.createElement("li");
        
        todoMessage.appendChild(listText);
        column.appendChild(todoMessage);
        checkColumn.appendChild(checkElement);
        deleteColumn.appendChild(deleteElement);
        editColumn.appendChild(editElement);
        row.appendChild(checkColumn);
        row.appendChild(column);
        row.appendChild(editColumn);
        row.appendChild(deleteColumn);

    }

    private el: Element;
}