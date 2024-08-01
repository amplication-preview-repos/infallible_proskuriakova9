import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="generatedBy" source="generatedBy" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
