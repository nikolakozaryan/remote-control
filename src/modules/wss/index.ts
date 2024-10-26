import { WebSocketServer } from "ws";
import { parseIncomingMessage, parseOutgoingMessage } from "../../utils/parseMessage";
import { MessageTypeEnum } from "../../models/enum";
import { IRegIn, IRegOut } from "../../models/interfaces/data-interfaces";
import { IBaseMessage, IParsedMessage } from "../../models/interfaces";

const users: { name: string; password: string; wins: number }[] = [];

export class WSServer {
  private _server: WebSocketServer;

  constructor(port: number) {
    this._server = new WebSocketServer({ port });
  }

  listen() {
    this._server.on("connection", (ws) => {
      ws.on("error", console.error);

      ws.on("message", (data) => {
        const parsedData = parseIncomingMessage(data);

        if (parsedData.type === MessageTypeEnum.REG) {
          const data = parsedData.data as IRegIn;

          let user = users.find(({ name, password }) => name === data.name && password === data.password);

          if (!user) {
            user = { ...data, wins: 0 };
            users.push(user);
          }

          const respData = { error: false, errorText: "", name: user.name, index: 0 } as IRegOut;

          const resp: IParsedMessage = {
            type: MessageTypeEnum.REG,
            id: 0,
            data: respData,
          };

          ws.send(parseOutgoingMessage(resp));
        }
      });
    });
  }
}

export const createWSServer = (port: number) => new WSServer(port);
