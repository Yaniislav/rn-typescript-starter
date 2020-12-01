import React from 'react';
import FormTextInput, { IFormTextInputProps } from '../FormTextInput';

const FormEmailInput = (props: IFormTextInputProps) => {
  return (
    <FormTextInput
      placeholder="Email"
      keyboardType="email-address"
      returnKeyType="next"
      {...props}
    />
  );
};

export default FormEmailInput;
