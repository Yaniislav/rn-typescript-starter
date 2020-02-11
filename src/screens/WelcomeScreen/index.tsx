import React, { ReactElement, useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { StackParamList } from 'navigation';
import { signInAction } from 'store/actions';

export type WelcomeScreenProps = {
  navigation: StackNavigationProp<StackParamList, 'SignIn'>;
  route: RouteProp<StackParamList, 'SignIn'>;
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
