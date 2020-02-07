import React, { ReactElement } from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';

const App = (): ReactElement => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>TS Example</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
