import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';

export default function MainNavigator(): ReactElement {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
