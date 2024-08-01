import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="generatedBy" source="generatedBy" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
