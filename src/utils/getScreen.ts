import { mouse, Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';
import { Actions } from '../constants/constants';
import { Duplex } from 'stream';

const isValidScreen = async (x: number, y: number): Promise<boolean> => {
  const screenWidth = await screen.width();
  const screenHeight = await screen.height();
  const [upperX, upperY, lowerX, lowerY] = [x + 100, y + 100, x - 100, y - 100];
  const isInScreen =
    upperX <= screenWidth &&
    lowerX >= 0 &&
    upperY <= screenHeight &&
    lowerY >= 0;
  return isInScreen;
};

export const getScreen = async (stream: Duplex): Promise<string> => {
  const { x, y } = await mouse.getPosition();
  const validScreen = await isValidScreen(x, y);

  if (!validScreen) {
    return 'Error: screenshot area is out of screen';
  }

  const left = x - 100;
  const top = y - 100;
  const region = new Region(left, top, 200, 200);
  const image = await screen.grabRegion(region);
  const { data, width, height } = await image.toRGB();
  const jimpImage = await new Jimp({ data, width, height });
  const buffer = (await jimpImage.getBufferAsync(Jimp.MIME_PNG)).toString(
    'base64'
  );

  const response = `${Actions.prtnScrn} ${buffer}`;
  stream.write(response);

  return 'The screenshot has been made';
};
