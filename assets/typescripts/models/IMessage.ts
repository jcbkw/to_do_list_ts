import {MessageStatusType} from "MessageStatus"

export interface IMessage extends Object {
    "lastModified": number,
    "message": string,
    "status": MessageStatusType,
    "id": string
}