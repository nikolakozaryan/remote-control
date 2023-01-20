import { mouse } from '@nut-tree/nut-js';
import { WebSocket } from 'ws';

export const getPosition = async (ws: WebSocket) => {
  const { x, y } = await mouse.getPosition();
  ws.send(`mouse_position ${x},${y}`);
};
