import { httpServer } from "./src/modules/http_server";
import { createWSServer } from "./src/modules/wss";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = createWSServer(3000);

wss.listen();
