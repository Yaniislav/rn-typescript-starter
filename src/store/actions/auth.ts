import { createAction } from '@reduxjs/toolkit';

import {
  ISignUpAction,
  IDidSignInAction,
  ITokenAction,
  ISignInAction,
} from 'interfaces/actions/auth';

export const signInAction = createAction<ISignInAction>('signIn');
export const didSignInAction = createAction<IDidSignInAction>('didSignIn');

export const signUpAction = createAction<ISignUpAction>('signUp');
export const didSignUpAction = createAction<IDidSignInAction>('didSignUp');

export const signOutAction = createAction('signOut');
export const didUpdateTokensAction =
  createAction<ITokenAction>('didUpdateTokens');
