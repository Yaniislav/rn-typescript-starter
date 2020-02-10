import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from 'screens/WelcomeScreen';
import SignInScreen from 'screens/SignInScreen';

export type AuthStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = (): ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
