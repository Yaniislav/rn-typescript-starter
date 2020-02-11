import React, { ReactElement, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import WelcomeScreen from 'screens/WelcomeScreen';
import SignInScreen from 'screens/SignInScreen';
import HomeScreen from 'screens/HomeScreen';

import { userLoggedInSelector } from 'store/selectors';

export type StackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default function MainNavigator(): ReactElement {
  const isLoggedIn = useSelector(userLoggedInSelector);

  const renderContent = useCallback(() => {
    if (!isLoggedIn) {
      return (
        <>
          <Stack.Screen name={'Welcome'} component={WelcomeScreen} />
          <Stack.Screen name={'SignIn'} component={SignInScreen} />
        </>
      );
    }

    return <Stack.Screen name={'Home'} component={HomeScreen} />;
  }, [isLoggedIn]);

  return (
    <NavigationContainer>
      <Stack.Navigator>{renderContent()}</Stack.Navigator>
    </NavigationContainer>
  );
}
