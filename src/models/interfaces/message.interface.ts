import { MessageTypeEnum } from "../enum";
import { MessageData } from "../types/message-data.type";

interface IMessage {
  type: MessageTypeEnum;
  id: 0;
}

export interface IBaseMessage extends IMessage {
  data: string;
}

export interface IParsedMessage extends IMessage {
  data: MessageData;
}
