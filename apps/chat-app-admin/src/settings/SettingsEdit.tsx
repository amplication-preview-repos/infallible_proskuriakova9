import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SettingsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="key" source="key" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
