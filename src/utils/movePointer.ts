import { mouse, up, down, left, right } from '@nut-tree/nut-js';

export async function mouseUp(distance: number) {
  await mouse.move(up(distance));
}
export async function mouseDown(distance: number) {
  await mouse.move(down(distance));
}
export async function mouseLeft(distance: number) {
  await mouse.move(left(distance));
}
export async function mouseRight(distance: number) {
  await mouse.move(right(distance));
}
