import { createAction } from '@reduxjs/toolkit';

import {
  ISignUpAction,
  IDidSignInAction,
  IDidUpdateTokenAction,
  ISignInAction,
} from 'interfaces/auth';

export const signInAction = createAction<ISignInAction>('signIn');
export const signUpAction = createAction<ISignUpAction>('signUp');
export const signOutAction = createAction('signOut');
export const didSignInAction = createAction<IDidSignInAction>('didSignIn');
export const didSignUpAction = createAction<IDidSignInAction>('didSignUp');
export const didUpdateTokensAction = createAction<IDidUpdateTokenAction>(
  'didUpdateTokens',
);
