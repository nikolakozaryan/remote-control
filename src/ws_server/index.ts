import { WebSocketServer, createWebSocketStream } from 'ws';
import { messageHandler } from '../utils/messageHandler';

export const createWSS = (port: number) => {
  const wss = new WebSocketServer({ port });
  console.log(`WS server started on port ${port}`);

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

  wss.on('close', () => {
    console.log('Server was stopped');
    wss.clients.forEach((ws) => {
      ws.close();
    });
  });

  return wss;
};