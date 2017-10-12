export enum MessageStatusType {
    TODO  = 0,
    DOING = 1,
    DONE  = 2
}

export class MessageStatus {

    constructor(private type: MessageStatusType){};

    public toggle(): MessageStatusType {
        return this.type === MessageStatusType.DONE ? MessageStatusType.TODO : MessageStatusType.DONE
    }
    
}

