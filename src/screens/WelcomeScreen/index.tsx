import React, { ReactElement, useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import { AuthStackParamList } from 'navigation/AuthStack';
import { signInAction } from 'app-redux/actions';

export type WelcomeScreenProps = {
  navigation: StackNavigationProp<AuthStackParamList, 'SignIn'>;
};

const WelcomeScreen = ({ navigation }: WelcomeScreenProps): ReactElement => {
  const dispatch = useDispatch();

  const onSignInPress = useCallback(() => {
    navigation.push('SignIn');
    dispatch(
      signInAction({
        email: 'Test',
        password: 'Test',
      }),
    );
  }, [navigation, dispatch]);

  return (
    <View>
      <Text>Welcome to Starter</Text>
      <Button title={'Go To Sign In'} onPress={onSignInPress} />
    </View>
  );
};

export default WelcomeScreen;
