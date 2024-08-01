import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";

export type NpcCreateInput = {
  chatRoom?: ChatRoomWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
