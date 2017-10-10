export class DataService {
    
    public static getTemplate (url:string, callback: (json: any) => any) {
        
        DataService.getText(url, callback);
        
    }

    public static getContent (callback: (json: any) => any) {
        
        DataService.getJson("/content.json", callback);
        
    }
   
    public static getContacts (callback: (contacts: IContactMap) => any) {
        
        DataService.getJson("/entries", function (contacts: object) {

            callback(contacts as IContactMap);
            
        });
        
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
  
}