import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { RawData } from 'ws';
import { drawCircle, drawRectangle } from './drawFigures';
import { parseAction } from './parseAction';
import { WebSocket } from 'ws';
import { Actions } from '../constants/constants';

export const messageHandler = async (data: RawData, ws: WebSocket) => {
  const message = data.toString();
  const { actionType, coordinates } = parseAction(message);
  const [delta, height] = coordinates;
  const { x, y } = await mouse.getPosition();

  switch (actionType) {
    case Actions.mouseUp:
      await mouse.move(up(delta));
      break;
    case Actions.mouseDown:
      await mouse.move(down(delta));
      break;
    case Actions.mouseLeft:
      await mouse.move(left(delta));
      break;
    case Actions.mouseRight:
      await mouse.move(right(delta));
      break;
    case Actions.mousePos:
      ws.send(`mouse_position ${x},${y}`);
      break;
    case Actions.drawCircle:
      await drawCircle(x, y, delta);
      break;
    case Actions.drawRectangle:
      await drawRectangle(delta, height);
      break;
    case Actions.drawSquare:
      await drawRectangle(delta, delta);
      break;
    case Actions.prtnScrn:
      break;
    default:
      console.log('Something went wrong');
  }
};
