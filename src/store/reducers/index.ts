import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth';
import user from './user';
import config from './config';

export default combineReducers({
  auth,
  user,
  config,
});
