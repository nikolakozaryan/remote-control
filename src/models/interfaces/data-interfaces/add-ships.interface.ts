import { IShip } from "../ship.interface";

export interface AddShipsIn {
  gameId: number | string;
  ships: IShip[];
  indexPlayer: number | string /* id of the player in the current game session */;
}
