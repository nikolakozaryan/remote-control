export interface IUpdateRoomOut {
  roomId: number | string;
  roomUsers: [
    {
      name: string;
      index: number | string;
    },
  ];
}
