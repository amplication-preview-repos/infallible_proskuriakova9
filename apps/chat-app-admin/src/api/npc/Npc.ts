import { ChatRoom } from "../chatRoom/ChatRoom";

export type Npc = {
  chatRoom?: ChatRoom | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
