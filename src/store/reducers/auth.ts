import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import {
  didSignInAction,
  didSignUpAction,
  didUpdateTokensAction,
  signOutAction,
} from '../actions';
import { IAuthState } from 'interfaces/auth';

const authanticateUser = (
  _: any,
  { payload }: PayloadAction<IAuthState>,
): IAuthState => ({
  accessToken: payload.accessToken,
  refreshToken: payload.refreshToken,
});

const reducer = createReducer<IAuthState>(
  {},
  {
    [didSignInAction.type]: authanticateUser,
    [didSignUpAction.type]: authanticateUser,
    [didUpdateTokensAction.type]: authanticateUser,
    [signOutAction.type]: () => ({}),
  },
);

export default reducer;
