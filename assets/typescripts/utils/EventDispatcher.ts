//#region CustomEvent Polyfill
declare global {
    interface Window { 
        CustomEvent: any;  
        Event: any; 
    }
}

(function () {
    if ( typeof window.CustomEvent === "function" ) return false;

    function CustomEvent ( event, params ) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent( 'CustomEvent' );
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
//#endregion

export class EventDispatcher {

    private _dispatcher: Element;

    constructor () {
        this._dispatcher = document.createElement('div');
    }

    public on (type: string, listener: EventListener): EventDispatcher {
        this._dispatcher.addEventListener(type, listener, false);
        return this;
    }

    public off (type: string, listener: EventListener): EventDispatcher {
        this._dispatcher.removeEventListener(type, listener, false);
        return this;
    }

    protected trigger (type: string, detail?: object): EventDispatcher {
        this._dispatcher.dispatchEvent(new CustomEvent(type, {detail: detail || {}}));
        return this;
    }

}