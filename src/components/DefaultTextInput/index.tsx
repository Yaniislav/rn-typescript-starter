import React, { FC, Ref, forwardRef } from 'react';
import { TextInput, TextInputProperties } from 'react-native';

import styles from './styles';

const DefaultTextInput: FC<TextInputProperties> = (
  { style, ...rest }: TextInputProperties,
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
