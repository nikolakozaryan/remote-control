import { IShip } from "../ship.interface";

export interface IStartGameOut {
  ships: IShip[] /* player's ships, not enemy's */;
  currentPlayerIndex: number | string /* id of the player in the current game session, who have sent his ships */;
}
