import React, { ReactElement } from 'react';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import MainNavigator from 'navigation';
import ErrorBoundary from 'components/ErrorBoundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const queryClient = new QueryClient();

const App = (): ReactElement => {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
};

export default App;
