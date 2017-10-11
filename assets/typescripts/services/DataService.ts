import { IMessage } from "../models/IMessage";

export class DataService {
    
    public static getTemplate (url:string, callback: (json: any) => any) {
        
        DataService.getText(url, callback);
        
    }

    public static getContent (callback: (json: any) => any) {
        
        DataService.getJson("/content.json", callback);
        
    }
   
    public static getMessages (callback: (messages: IMessage[]) => any) {
        
        DataService.getJson("/entries", function (messages: object[]) {

            callback(messages as IMessage[]);
            
        });
        
    }
    
    public static createMessage (messageText: string, callback: (message: IMessage) => any) {
        
        DataService.xhrGeneric("POST", "/entries", function (error: Error, result: string) {

            let message: IMessage = null;
            
            if (!error) {
                message = JSON.parse(result) as IMessage;
            }

            callback(message);
            
        }, {message: messageText});
        
    }

    public static deleteMessage (messageId: string, callback: (message: IMessage) => any) {
        
        DataService.xhrGeneric("DELETE", "/entries", function (error: Error, result: string) {

            let message: IMessage = null;

            if (!error) {
                message = JSON.parse(result) as IMessage;
            }

            callback(message);
            
        }, {id: messageId});
        
    }
    
    private static getJson (url: string, callback: (json: any) => any) {

        DataService.getText(url, function (text: string) {
            
            callback(JSON.parse(text));
                        
        });

    }

    private static getText (url: string, callback: (text: String) => any) {

        let xhr = new XMLHttpRequest;
        
        xhr.addEventListener("load", function (e) {
            callback(this.responseText);
        }, false);

        xhr.addEventListener("error", function (e) {
            callback(null);
        }, false); 

        xhr.open("GET", url, true /*async*/);
        xhr.send();

    }
  
    /**
     * Create a new ajax POST request.
     * Takes parameters as an *object* Key and values are encoded and passed to the server.
     * Sends our post with one argument (payload).
     * 
     * Appends a callback function to an event listener "load" (complete)that has two parameters
     * - the first parameter is built in error handle
     * - the second parameter is a capture of the server's response 
     * 
     * returns the xhr object
     * 
     * @param method
     * @param url
     * @param params
     * @param callback
     */ 
    private static xhrGeneric (method: string, url: string, callback: (error: Error, text?: String) => any, params?: object) {
        
        let xhr = new XMLHttpRequest();
        let payload;

        xhr.open(method, url, /*async*/true);

        xhr.addEventListener("load", function () {
            callback(/*no error*/null, this.responseText);
        });

        xhr.addEventListener("error", function (error) {
            callback(error.error);
        });

        if (params) {
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            payload = [];

            for (var i in params) {
                if (params.hasOwnProperty(i)) {
                    payload.push(encodeURIComponent(i) + "=" + encodeURIComponent(params[i]));
                }
            }
            
            xhr.send(payload.join("&"));        
        }
        else {
            xhr.send();        
        }

    }
  
}