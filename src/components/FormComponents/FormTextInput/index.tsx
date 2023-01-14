import React, { Ref, forwardRef, useCallback } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
} from 'react-hook-form';

import DefaultTextInput from 'components/DefaultTextInput';
import DefaultText from 'components/DefaultText';
import styles from './styles';

export interface IFormTextInputProps extends Partial<TextInputProps> {
  error?: FieldError;
  control: Control<any>;
  name: string;
}

const FormTextInput = (
  { error, control, name, ...rest }: IFormTextInputProps,
  ref: Ref<TextInput>,
) => {
  const renderError = useCallback(() => {
    if (error) {
      return (
        <View style={styles.errorContainer}>
          <DefaultText>
            {error?.message || ''}
          </DefaultText>
        </View>
      );
    }

    return null;
  }, [error]);

  const renderComponent = useCallback<ControllerProps['render']>(
    ({ field: { onChange, onBlur, value } }) => (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <DefaultTextInput
            style={styles.inputStyle}
            ref={ref}
            onChangeText={(value) => onChange(value)}
            onBlur={onBlur}
            value={value}
            {...rest}
          />
        </View>
        {renderError()}
      </View>
    ),
    [ref, renderError, rest],
  );

  return <Controller control={control} render={renderComponent} name={name} />;
};

export default forwardRef(FormTextInput);
