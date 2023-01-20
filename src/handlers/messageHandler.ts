import { RawData, WebSocket } from 'ws';
import { parseAction } from '../utils/parseAction';
import { Actions } from '../constants/constants';
import { getScreen } from '../utils/getScreen';
import {
  mouseDown,
  mouseLeft,
  mouseRight,
  mouseUp,
} from '../utils/movePointer';
import { getPosition } from '../utils/getPosition';
import { drawCircle, drawRectangle } from '../utils/drawFigure';

export const messageHandler = async (data: RawData, ws: WebSocket) => {
  const message = data.toString();
  const { actionType, coordinates } = parseAction(message);
  const [dx, dy] = coordinates;

  switch (actionType) {
    case Actions.mouseUp:
      await mouseUp(dx);
      break;
    case Actions.mouseDown:
      await mouseDown(dx);
      break;
    case Actions.mouseLeft:
      await mouseLeft(dx);
      break;
    case Actions.mouseRight:
      await mouseRight(dx);
      break;
    case Actions.mousePos:
      await getPosition(ws);
      break;
    case Actions.drawCircle:
      await drawCircle(dx);
      break;
    case Actions.drawRectangle:
      await drawRectangle(dx, dy);
      break;
    case Actions.drawSquare:
      await drawRectangle(dx, dx);
      break;
    case Actions.prtnScrn:
      await getScreen(ws);
      break;
    default:
      console.log('Something went wrong');
  }
};
