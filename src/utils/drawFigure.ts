import {
  Button,
  down,
  left,
  mouse,
  Point,
  right,
  straightTo,
  up,
} from '@nut-tree/nut-js';

export const drawRectangle = async (
  width: number,
  height: number
): Promise<string> => {
  const figure = width === height ? 'square' : 'rectangle';

  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(width));
  await mouse.move(down(height));
  await mouse.move(left(width));
  await mouse.move(up(height));
  await mouse.releaseButton(Button.LEFT);

  return `The ${figure} has been drawn`;
};

export const drawCircle = async (radius: number): Promise<string> => {
  const { x, y } = await mouse.getPosition();
  const deg = Math.PI / 180;
  const center_x = x + radius;
  const center_y = y;

  await mouse.pressButton(Button.LEFT);
  for (let i = 180; i >= -180; i -= 3) {
    const cur_x = center_x + radius * Math.cos(deg * i);
    const cur_y = center_y + radius * Math.sin(deg * i);
    const cur_point = new Point(cur_x, cur_y);

    await mouse.move(straightTo(cur_point));
  }
  await mouse.releaseButton(Button.LEFT);

  return 'The circle has been drawn';
};
