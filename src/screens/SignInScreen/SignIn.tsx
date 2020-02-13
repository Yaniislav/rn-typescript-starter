import React, { useCallback, ReactChild, useRef } from 'react';
import { TextInput } from 'react-native';
import { FormikProps } from 'formik';

import styles from './styles';
import FormProvider, { ISignInFormProps } from './FormProvider';
import FormTextInput from 'components/FormTextInput';
import DefaultText from 'components/DefaultText';
import DefaultButton from 'components/DefaultButton';
import ISignInAction from 'store/actions/auth/ISignInAction';
import KeyboardAvoidingWrapper from 'components/KeyboardAvoidingWrapper';

const SignIn: React.FunctionComponent<ISignInFormProps> = ({ onSubmit }) => {
  const passwordRef = useRef<TextInput>(null);

  const onEmailNextPress = useCallback(() => {
    passwordRef.current?.focus();
  }, [passwordRef]);

  const renderForm: (
    values: FormikProps<ISignInAction>,
  ) => ReactChild = useCallback(
    ({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      errors,
      touched,
    }: FormikProps<ISignInAction>) => {
      return (
        <>
          <DefaultText style={styles.title} size="large">
            Sign In
          </DefaultText>
          <FormTextInput
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder="Email"
            error={errors.email}
            touched={touched.email}
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={onEmailNextPress}
          />
          <FormTextInput
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            secureTextEntry
            placeholder="Password"
            error={errors.password}
            touched={touched.password}
            returnKeyType="done"
            ref={passwordRef}
          />
          <DefaultButton title={'Sign In'} onPress={handleSubmit} />
        </>
      );
    },
    [onEmailNextPress],
  );

  return (
    <KeyboardAvoidingWrapper contentContainerStyle={styles.container}>
      <FormProvider onSubmit={onSubmit}>{renderForm}</FormProvider>
    </KeyboardAvoidingWrapper>
  );
};

export default SignIn;
