import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { IAuthState } from 'interfaces/reducers/auth';

export const userLoggedInSelector = createSelector<RootState, IAuthState>(
  state => state.auth,
  auth => !!auth.accessToken,
);
