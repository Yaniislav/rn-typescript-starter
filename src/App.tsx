import React, { ReactElement } from 'react';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import MainNavigator from 'navigation';
import ErrorBoundary from 'components/ErrorBoundary';

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
