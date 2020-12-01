import React, { ReactElement, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import WelcomeScreen from 'screens/WelcomeScreen';
import SignInScreen from 'screens/SignInScreen';
import HomeScreen from 'screens/HomeScreen';

import { userLoggedInSelector } from 'store/selectors';
import { navigationRef } from './RootNavigation';
import Routes from './routes';

export type StackParamList = {
  [Routes.Welcome]: undefined;
  [Routes.SignIn]: undefined;
  [Routes.Home]: undefined;
};

const unAuthScreensConfiguration = {
  headerShown: false,
};

const Stack = createStackNavigator<StackParamList>();

export default function MainNavigator(): ReactElement {
  const isLoggedIn = useSelector(userLoggedInSelector);

  const renderContent = useCallback(() => {
    if (!isLoggedIn) {
      return (
        <>
          <Stack.Screen
            options={unAuthScreensConfiguration}
            name={Routes.Welcome}
            component={WelcomeScreen}
          />
          <Stack.Screen
            name={Routes.SignIn}
            options={unAuthScreensConfiguration}
            component={SignInScreen}
          />
        </>
      );
    }

    return <Stack.Screen name={Routes.Home} component={HomeScreen} />;
  }, [isLoggedIn]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>{renderContent()}</Stack.Navigator>
    </NavigationContainer>
  );
}
