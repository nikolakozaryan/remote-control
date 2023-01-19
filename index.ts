import { WebSocketServer } from 'ws';
import { HTTP_PORT, WS_PORT } from './src/constants/constants';
import { httpServer } from './src/http_server/';
import { messageHandler } from './src/utils/messageHandler';

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WS_PORT });

wss.on('connection', (ws) => {
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
