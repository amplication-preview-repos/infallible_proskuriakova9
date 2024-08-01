import { JsonValue } from "type-fest";

export type Settings = {
  createdAt: Date;
  id: string;
  key: string | null;
  updatedAt: Date;
  value: JsonValue;
};
