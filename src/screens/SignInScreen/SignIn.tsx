import React, { useCallback, useMemo, useRef } from 'react';
import { TextInput } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

import FormTextInput from 'components/FormTextInput';
import DefaultText from 'components/DefaultText';
import DefaultButton from 'components/DefaultButton';
import { ISignInAction } from 'interfaces/auth';
import KeyboardAvoidingWrapper from 'components/KeyboardAvoidingWrapper';
import styles from './styles';

type ISignInForm = ISignInAction;

const SignInSchema = object().shape({
  email: string()
    .email('Invalid email')
    .required(),
  password: string()
    .required()
    .min(6)
    .max(15),
});

interface IProps {
  onSubmit: (values: ISignInAction) => void;
}

const SignIn: React.FC<IProps> = ({ onSubmit }: IProps) => {
  const { errors, control, handleSubmit } = useForm<ISignInForm>({
    resolver: yupResolver(SignInSchema),
  });

  const passwordRef = useRef<TextInput>(null);

  const onSignInPress = useMemo(() => handleSubmit(onSubmit), [
    onSubmit,
    handleSubmit,
  ]);

  const onEmailNextPress = useCallback(() => {
    passwordRef.current?.focus();
  }, [passwordRef]);

  return (
    <KeyboardAvoidingWrapper contentContainerStyle={styles.container}>
      <DefaultText style={styles.title} size="large">
        Sign In
      </DefaultText>
      <FormTextInput
        placeholder="Email"
        error={errors.email}
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={onEmailNextPress}
        control={control}
        name={'email'}
      />
      <FormTextInput
        secureTextEntry
        placeholder="Password"
        error={errors.password}
        control={control}
        returnKeyType="done"
        ref={passwordRef}
        name={'password'}
      />
      <DefaultButton title={'Sign In'} onPress={onSignInPress} />
    </KeyboardAvoidingWrapper>
  );
};

export default SignIn;
