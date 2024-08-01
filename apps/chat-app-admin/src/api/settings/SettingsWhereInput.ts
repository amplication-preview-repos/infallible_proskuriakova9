import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SettingsWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  value?: JsonFilter;
};
