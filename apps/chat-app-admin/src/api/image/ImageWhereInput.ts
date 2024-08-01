import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ImageWhereInput = {
  description?: StringNullableFilter;
  generatedBy?: StringNullableFilter;
  id?: StringFilter;
  url?: StringNullableFilter;
};
