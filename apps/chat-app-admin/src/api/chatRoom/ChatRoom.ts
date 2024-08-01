import { Npc } from "../npc/Npc";

export type ChatRoom = {
  createdAt: Date;
  id: string;
  npcs?: Array<Npc>;
  updatedAt: Date;
};
