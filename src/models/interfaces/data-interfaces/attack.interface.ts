import { AttackStatusEnum } from "../../enum";

export interface IAttackIn {
  gameId: number | string;
  x: number;
  y: number;
  indexPlayer: number | string /* id of the player in the current game session */;
}

export interface IRandomAtatckIn {
  gameId: number | string;
  indexPlayer: number | string /* id of the player in the current game session */;
}

export interface IAttackOut {
  position: {
    x: number;
    y: number;
  };
  currentPlayer: number | string /* id of the player in the current game session */;
  status: AttackStatusEnum;
}
