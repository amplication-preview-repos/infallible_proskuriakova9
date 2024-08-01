import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";

export type NpcUpdateInput = {
  chatRoom?: ChatRoomWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
