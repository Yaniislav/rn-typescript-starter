import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'configs/ReactotronConfig';

import reducer from './reducers';
import rootSaga from './sagas';

const middlewares: any[] = [];
const enhancers = [];
let sagaMiddleware;

if (Reactotron.createSagaMonitor && __DEV__) {
  const sagaMonitor = Reactotron.createSagaMonitor();
  sagaMiddleware = createSagaMiddleware({ sagaMonitor });
} else {
  sagaMiddleware = createSagaMiddleware();
}

if (__DEV__ && Reactotron.createEnhancer) {
  enhancers.push(Reactotron.createEnhancer());
}

middlewares.push(sagaMiddleware);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['auth'],
};

const persistedReducer = persistReducer<RootState>(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
  enhancers,
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { persistor };

export type RootState = ReturnType<typeof reducer>;

export default store;
