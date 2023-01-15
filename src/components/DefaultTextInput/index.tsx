import React, { Ref, forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import styles from './styles';

const DefaultTextInput = (
  { style, ...rest }: TextInputProps,
  ref: Ref<TextInput>,
) => {
  return (
    <TextInput
      blurOnSubmit={false}
      underlineColorAndroid="transparent"
      {...rest}
      style={[styles.fontStyle, style]}
      ref={ref}
    />
  );
};

export default forwardRef(DefaultTextInput);
