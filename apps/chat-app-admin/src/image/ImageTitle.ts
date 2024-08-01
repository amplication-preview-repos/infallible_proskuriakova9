import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "generatedBy";

export const ImageTitle = (record: TImage): string => {
  return record.generatedBy?.toString() || String(record.id);
};
