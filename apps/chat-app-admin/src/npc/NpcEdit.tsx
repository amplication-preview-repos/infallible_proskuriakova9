import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChatRoomTitle } from "../chatRoom/ChatRoomTitle";

export const NpcEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="chatRoom.id"
          reference="ChatRoom"
          label="chatRoom"
        >
          <SelectInput optionText={ChatRoomTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
