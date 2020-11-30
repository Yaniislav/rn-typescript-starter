import React, { FC, Ref, forwardRef, useCallback } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldError,
} from 'react-hook-form';

import DefaultTextInput from 'components/DefaultTextInput';
import DefaultText from 'components/DefaultText';
import styles from './styles';

interface IProps extends Partial<TextInputProps> {
  error?: FieldError;
  control: Control;
  name: string;
}

const FormTextInput: FC<IProps> = (
  { error, control, name, ...rest }: IProps,
  ref: Ref<TextInput>,
) => {
  const renderError = useCallback(() => {
    if (error) {
      return (
        <View style={styles.errorContainer}>
          <DefaultText size="small" type="error">
            {error?.message || ''}
          </DefaultText>
        </View>
      );
    }

    return null;
  }, [error]);

  const renderComponent = useCallback(
    ({ onChange, onBlur, value }: ControllerRenderProps) => (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <DefaultTextInput
            style={styles.inputStyle}
            ref={ref}
            onChangeText={value => onChange(value)}
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
