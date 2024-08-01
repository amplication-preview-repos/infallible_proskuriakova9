import { StringFilter } from "../../util/StringFilter";
import { NpcListRelationFilter } from "../npc/NpcListRelationFilter";

export type ChatRoomWhereInput = {
  id?: StringFilter;
  npcs?: NpcListRelationFilter;
};
