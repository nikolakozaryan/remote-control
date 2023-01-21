import { HTTP_PORT } from './constants/constants';
import { httpServer } from './http_server';
import { wss } from './ws_server';

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

process.on('exit', () => {
  wss.clients.forEach((ws) => {
    ws.close();
  });
  wss.close();
});

process.on('SIGINT', () => process.exit());
