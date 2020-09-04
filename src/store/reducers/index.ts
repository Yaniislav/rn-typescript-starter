import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth';
import user from './user';

export default combineReducers({
  auth,
  user,
});
