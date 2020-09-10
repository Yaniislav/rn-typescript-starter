import React, { ReactElement } from 'react';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';

import Config from 'react-native-config';

import store, { persistor } from './store';
import MainNavigator from 'navigation';
import ErrorBoundary from 'components/ErrorBoundary';

console.log('Api Url: ', Config.API_URL);

const App = (): ReactElement => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
