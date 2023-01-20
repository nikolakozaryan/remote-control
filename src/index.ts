import { HTTP_PORT, WS_PORT } from './constants/constants';
import { httpServer } from './http_server';
import { createWSS } from './ws_server';

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
const wss = createWSS(WS_PORT);

process.on('exit', () => {
  wss.close();
});

process.on('SIGINT', () => process.exit());
