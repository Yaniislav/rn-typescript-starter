import React, { ReactElement } from 'react';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';

import store, { persistor } from './redux';
import MainNavigator from 'navigation';

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
