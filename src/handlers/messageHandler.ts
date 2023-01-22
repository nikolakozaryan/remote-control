import { RawData } from 'ws';
import { Duplex } from 'stream';
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

export const messageHandler = async (data: RawData, stream: Duplex) => {
  const message = data.toString();
  const { actionType, coordinates } = parseAction(message);
  console.log(`Action: ${actionType}`);
  const [dx, dy] = coordinates;
  let actionResult = '';

  switch (actionType) {
    case Actions.mouseUp:
      stream.write(actionType);
      actionResult = await mouseUp(dx);
      break;
    case Actions.mouseDown:
      stream.write(actionType);
      actionResult = await mouseDown(dx);
      break;
    case Actions.mouseLeft:
      stream.write(actionType);
      actionResult = await mouseLeft(dx);
      break;
    case Actions.mouseRight:
      stream.write(actionType);
      actionResult = await mouseRight(dx);
      break;
    case Actions.mousePos:
      actionResult = await getPosition(stream);
      break;
    case Actions.drawCircle:
      stream.write(actionType);
      actionResult = await drawCircle(dx);
      break;
    case Actions.drawRectangle:
      stream.write(actionType);
      actionResult = await drawRectangle(dx, dy);
      break;
    case Actions.drawSquare:
      stream.write(actionType);
      actionResult = await drawRectangle(dx, dx);
      break;
    case Actions.prtnScrn:
      actionResult = await getScreen(stream);
      break;
    default:
      console.log('Something went wrong');
  }

  console.log(`Result: ${actionResult}`);
};
