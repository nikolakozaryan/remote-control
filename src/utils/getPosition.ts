import { mouse } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const getPosition = async (stream: Duplex) => {
  const { x, y } = await mouse.getPosition();
  stream.write(`mouse_position ${x},${y}`);
};
