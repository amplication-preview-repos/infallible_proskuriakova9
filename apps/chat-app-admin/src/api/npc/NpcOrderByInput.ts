import { SortOrder } from "../../util/SortOrder";

export type NpcOrderByInput = {
  chatRoomId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
