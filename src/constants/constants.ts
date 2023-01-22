export const HTTP_PORT = 8181;
export const WS_PORT = 8080;

export const WS_URL = `ws://localhost:${WS_PORT}`;

export enum Actions {
  mouseUp = 'mouse_up',
  mouseDown = 'mouse_down',
  mouseLeft = 'mouse_left',
  mouseRight = 'mouse_right',
  mousePos = 'mouse_position',
  drawCircle = 'draw_circle',
  drawRectangle = 'draw_rectangle',
  drawSquare = 'draw_square',
  prtnScrn = 'prnt_scrn',
}
