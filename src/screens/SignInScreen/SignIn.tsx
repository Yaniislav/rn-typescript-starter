import React, { useCallback, ReactChild } from 'react';
import { View } from 'react-native';
import { FormikValues } from 'formik';

import styles from './styles';
import FormProvider, { ISignInFormProps } from './FormProvider';
import FormTextInput from 'components/FormTextInput';
import DefaultText from 'components/DefaultText';

const SignIn: React.FunctionComponent<ISignInFormProps> = ({ onSubmit }) => {
  const renderForm: (values: FormikValues) => ReactChild = useCallback(
    ({ handleChange, handleBlur, handleSubmit, values }: FormikValues) => {
      return (
        <>
          <DefaultText>Sign In</DefaultText>
          <FormTextInput
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
          />
          <FormTextInput
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            secureTextEntry
          />
        </>
      );
    },
    [],
  );

  return (
    <View style={styles.container}>
      <FormProvider onSubmit={onSubmit}>{renderForm}</FormProvider>
    </View>
  );
};

export default SignIn;
