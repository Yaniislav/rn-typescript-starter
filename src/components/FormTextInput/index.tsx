import React, { FC, useMemo, Ref, forwardRef } from 'react';
import { View, TextInputProperties, TextInput } from 'react-native';

import DefaultTextInput from 'components/DefaultTextInput';
import DefaultText from 'components/DefaultText';

import styles from './styles';

interface IProps extends TextInputProperties {
  error?: string;
  touched?: boolean;
}

const FormTextInput: FC<IProps> = (
  { error, touched, ...rest }: IProps,
  ref: Ref<TextInput>,
) => {
  const Error = useMemo(() => {
    if (error && touched) {
      return (
        <View style={styles.errorContainer}>
          <DefaultText size="small" type="error">
            {error}
          </DefaultText>
        </View>
      );
    }

    return null;
  }, [error, touched]);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <DefaultTextInput {...rest} style={styles.inputStyle} ref={ref} />
      </View>
      {Error}
    </View>
  );
};

export default forwardRef(FormTextInput);
