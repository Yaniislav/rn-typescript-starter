import { createAction } from 'redux-act';

import ISignInAction from './ISignInAction';
import ISignUpAction from './ISignUpAction';
import IDidSignInAction from './IDidSignInAction';
import IDidUpdateTokensAction from './IDidUpdateTokensAction';

export const signInAction = createAction<ISignInAction>('Sign In Action');
export const signUpAction = createAction<ISignUpAction>('Sign Up Action');
export const signOutAction = createAction('Sign Out Action');
export const didSignInAction = createAction<IDidSignInAction>(
  'Did Sign In Action',
);
export const didSignUpAction = createAction<IDidSignInAction>(
  'Did Sign Up Action',
);
export const didUpdateTokensAction = createAction<IDidUpdateTokensAction>(
  'Did Update Tokens Actions',
);
