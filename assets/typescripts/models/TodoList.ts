export class TodoList {

    public static STATUS_TODO: number = 0;
    public static STATUS_DOING: number = 1;
    public static STATUS_DONE: number = 2;
    
    private payload: {id: number, status: number};

    private getStatus (id: number, status: number): void {

        this.payload.status = status === TodoList.STATUS_DOING
        ? TodoList.STATUS_TODO
        : TodoList.STATUS_DONE 

    };
}