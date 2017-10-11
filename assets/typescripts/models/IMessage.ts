import {MessageStatus} from "MessageStatus"

export interface IMessage extends Object {
    "lastModified": number,
    "message": string,
    "status": MessageStatus,
    "id": string
}