import { ButtonResponse as TButtonResponse } from "../api/buttonResponse/ButtonResponse";

export const BUTTONRESPONSE_TITLE_FIELD = "id";

export const ButtonResponseTitle = (record: TButtonResponse): string => {
  return record.id?.toString() || String(record.id);
};
