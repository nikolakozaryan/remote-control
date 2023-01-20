import { WebSocketServer, createWebSocketStream } from "ws";
import { messageHandler } from "../utils/messageHandler";

export const createWSS = (port: number) => {
  const wss = new WebSocketServer({ port });

  wss.on('connection', (ws) => {
    const duplex = createWebSocketStream(ws);

    ws.on('message', (message) => {
      messageHandler(message, ws);
    });

    ws.on('close', () => {
      console.log(`Client disconnected`);
    });

    ws.on('error', (error) => {
      console.log('Error: ', error);
    });
  });
};
