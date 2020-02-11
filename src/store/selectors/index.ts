import { createSelector } from 'reselect';
import { RootState } from 'store';
import { IAuthState } from '../reducers/auth';

export const userLoggedInSelector = createSelector<
  RootState,
  IAuthState,
  boolean
>(
  state => state.auth,
  auth => !!auth.accessToken,
);
