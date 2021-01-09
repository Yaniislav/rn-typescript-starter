import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { SensitiveStorage } from '../../utils/sensitive-storage';

import auth from './auth';
import user from './user';

export default combineReducers({
  auth: persistReducer({ storage: SensitiveStorage, key: 'auth' }, auth),
  user,
});
