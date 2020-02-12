import React, { FC } from 'react';
import { TextInput, TextInputProperties } from 'react-native';

import styles from './styles';

const DefaultTextInput: FC<TextInputProperties> = (
  props: TextInputProperties,
) => {
  return (
    <TextInput
      blurOnSubmit={false}
      underlineColorAndroid="transparent"
      {...props}
    />
  );
};

export default DefaultTextInput;
