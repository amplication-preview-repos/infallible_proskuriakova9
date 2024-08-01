import { Settings as TSettings } from "../api/settings/Settings";

export const SETTINGS_TITLE_FIELD = "key";

export const SettingsTitle = (record: TSettings): string => {
  return record.key?.toString() || String(record.id);
};
