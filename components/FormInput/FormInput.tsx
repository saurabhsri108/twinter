import { FormControl, IInputProps, Input } from "native-base";
import React, { FunctionComponent } from "react";

interface FormInputProps {
  label: string;
  input?: IInputProps;
  error?: string;
}
export const FormInput: FunctionComponent<FormInputProps> = (props) => {
  return (
    <FormControl isInvalid={!!props.error}>
      <FormControl.Label>{props.label}</FormControl.Label>
      <Input {...props.input} />
      <FormControl.ErrorMessage>{props.error}</FormControl.ErrorMessage>
    </FormControl>
  );
};
