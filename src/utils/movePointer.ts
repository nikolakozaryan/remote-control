import { mouse, up, down, left, right } from '@nut-tree/nut-js';

export const mouseUp = async (distance: number): Promise<string> => {
  await mouse.move(up(distance));
  return `The pointer has been moved ${distance}px up`;
};
export const mouseDown = async (distance: number): Promise<string> => {
  await mouse.move(down(distance));
  return `The pointer has been moved ${distance}px down`;
};
export const mouseLeft = async (distance: number): Promise<string> => {
  await mouse.move(left(distance));
  return `The pointer has been moved ${distance}px left`;
};
export const mouseRight = async (distance: number): Promise<string> => {
  await mouse.move(right(distance));
  return `The pointer has been moved ${distance}px right`;
};
