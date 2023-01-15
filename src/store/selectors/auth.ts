import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { IAuthState } from 'interfaces/reducers/auth';

export const userLoggedInSelector = createSelector(
  (state: RootState) => state.auth,
  (auth: IAuthState) => !!auth.accessToken,
);
