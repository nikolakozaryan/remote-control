import { mouse, Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';
import { WebSocket } from 'ws';
import { Actions } from '../constants/constants';

export const getScreen = async (ws: WebSocket) => {
  const { x, y } = await mouse.getPosition();
  const left = x - 100;
  const top = y - 100;
  const region = new Region(left, top, 200, 200);
  const image = await screen.grabRegion(region);
  const { data, width, height } = await image.toRGB();
  const jimpImage = await new Jimp({ data, width, height });
  const buffer = (await jimpImage.getBufferAsync(Jimp.MIME_PNG)).toString(
    'base64'
  );
  ws.send(`${Actions.prtnScrn} ${buffer}`);
};
