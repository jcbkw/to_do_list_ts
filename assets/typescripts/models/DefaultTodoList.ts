export class DefaultTodoList {

    public title: string;
    //public entries: object;

    // private getTitle () {
    //     let xhr = new XMLHttpRequest,
    //     response: string;
    //     xhr.addEventListener("load", (e) => {
    //        response =  xhr.responseText;
    //        return response;
    //     })
    // }

    public update (title: string) {
        this.title = title;

    }

}

