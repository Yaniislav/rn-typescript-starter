import React, { ReactElement } from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = (): ReactElement => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>TS Example</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
