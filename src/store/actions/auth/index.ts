import { createAction } from 'redux-act';

import ISignInAction from './ISignInAction';
import ISignUpAction from './ISignUpAction';

export const signInAction = createAction<ISignInAction>('Sign In Action');
export const signUpAction = createAction<ISignUpAction>('Sign Up Action');
export const didSignInAction = createAction('Did Sign In Action');
export const didSignUpAction = createAction('Did Sign Up Action');
