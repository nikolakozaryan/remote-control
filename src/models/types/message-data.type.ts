import {
  AddShipsIn,
  IAddUserToRoomIn,
  IAttackIn,
  IAttackOut,
  ICreateGameOut,
  IFinishOut,
  IRandomAtatckIn,
  IRegIn,
  IRegOut,
  IStartGameOut,
  ITurnOut,
  IUpdateRoomOut,
  IUpdateWinnersOut,
} from "../interfaces/data-interfaces";

export type MessageData =
  | ""
  | AddShipsIn
  | IAddUserToRoomIn
  | IAttackIn
  | IAttackOut
  | ICreateGameOut
  | IFinishOut
  | IRandomAtatckIn
  | IRegIn
  | IRegOut
  | IStartGameOut
  | ITurnOut
  | IUpdateRoomOut
  | IUpdateWinnersOut;
