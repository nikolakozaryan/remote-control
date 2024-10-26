import { ShipTypeEnum } from "../enum";

export interface IShip {
  position: {
    x: number;
    y: number;
  };
  direction: boolean;
  length: number;
  type: ShipTypeEnum;
}
