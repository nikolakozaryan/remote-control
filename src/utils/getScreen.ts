import { FileType, mouse, Region, screen } from '@nut-tree/nut-js';
import fs from 'fs/promises';
import { WebSocket } from 'ws';
import { Actions } from '../constants/constants';

export const getScreen = async (ws: WebSocket) => {
  const { x, y } = await mouse.getPosition();
  const left = x - 100;
  const top = y - 100;
  const region = new Region(left, top, 200, 200);
  const image = await screen.captureRegion('screen', region, FileType.PNG);
  const imageBuffer = await fs.readFile(image, { encoding: 'base64' });

  await fs.rm(image);
  ws.send(`${Actions.prtnScrn} ${imageBuffer}`);
};
