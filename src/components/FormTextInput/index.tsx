import React, { FC, useMemo } from 'react';
import { View, TextInputProperties } from 'react-native';

import DefaultTextInput from 'components/DefaultTextInput';
import DefaultText from 'components/DefaultText';

interface IProps extends TextInputProperties {
  error?: string;
  touched?: boolean;
}

const FormTextInput: FC<IProps> = ({ error, touched, ...rest }: IProps) => {
  const Error = useMemo(() => {
    if (error && touched) {
      return <DefaultText type="error">{error}</DefaultText>;
    }

    return null;
  }, [error, touched]);

  return (
    <View>
      <DefaultTextInput {...rest} />
      {Error}
    </View>
  );
};

export default FormTextInput;
