import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { RawData } from 'ws';
import { drawCircle, drawRectangle } from './drawFigures';
import { parseAction } from './parseAction';
import { WebSocket } from 'ws';

export const messageHandler = async (data: RawData, ws: WebSocket) => {
  const message = data.toString();
  const { actionType, coordinates } = parseAction(message);
  const [delta, height] = coordinates;
  const { x, y } = await mouse.getPosition();

  switch (actionType) {
    case 'mouse_up':
      await mouse.move(up(delta));
      break;
    case 'mouse_down':
      await mouse.move(down(delta));
      break;
    case 'mouse_left':
      await mouse.move(left(delta));
      break;
    case 'mouse_right':
      await mouse.move(right(delta));
      break;
    case 'mouse_position':
      ws.send(`mouse_position ${x},${y}`);
      break;
    case 'draw_circle':
      await drawCircle(x, y, delta);
      break;
    case 'draw_rectangle':
      await drawRectangle(delta, height);
      break;
    case 'draw_square':
      await drawRectangle(delta, delta);
      break;
    case 'prnt_scrn':
      break;
    default:
      console.log('Something went wrong');
  }
};
