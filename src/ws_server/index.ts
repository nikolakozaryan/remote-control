import { WebSocketServer, createWebSocketStream } from 'ws';
import { WS_PORT } from '../constants/constants';
import { messageHandler } from '../handlers/messageHandler';

const createWSS = (port: number) => {
  const wss = new WebSocketServer({ port });
  console.log(`WS server started on port ${port}`);

  wss.on('connection', (ws) => {
    const duplex = createWebSocketStream(ws, {
      decodeStrings: false,
      encoding: 'utf8',
    });

    duplex.on('data', async (command) => {
      try {
        await messageHandler(command, duplex);
      } catch {
        console.log('kind of error happened');
      }
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
  });

  return wss;
};

export const wss = createWSS(WS_PORT);
