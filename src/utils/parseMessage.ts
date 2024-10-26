import { IBaseMessage, IParsedMessage } from "../models/interfaces/message.interface";
import { RawData } from "ws";

export function parseIncomingMessage(rawData: RawData): IParsedMessage {
  const parsed = JSON.parse(rawData.toString()) as IBaseMessage;

  return { ...parsed, data: parsed.data || JSON.parse(parsed.data) } as IParsedMessage;
}

export function parseOutgoingMessage(message: IParsedMessage): string {
  const { data } = message;

  return JSON.stringify({ ...message, data: JSON.stringify(data) });
}
