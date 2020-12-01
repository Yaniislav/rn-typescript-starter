import React, { Ref, forwardRef } from 'react';
import { TextInput } from 'react-native';
import FormTextInput, { IFormTextInputProps } from '../FormTextInput';

const FormPasswordInput = (props: IFormTextInputProps, ref: Ref<TextInput>) => {
  return (
    <FormTextInput
      secureTextEntry
      placeholder="Password"
      returnKeyType="done"
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(FormPasswordInput);
