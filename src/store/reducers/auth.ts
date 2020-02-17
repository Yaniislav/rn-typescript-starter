import { createReducer } from 'redux-act';

import {
  didSignInAction,
  didSignUpAction,
  didUpdateTokensAction,
  signOutAction,
} from '../actions';

export interface IAuthState {
  accessToken?: string;
  refreshToken?: string;
}

const reducer = createReducer<IAuthState>({}, {});

const authanticateUser = (_: any, payload: IAuthState): IAuthState => ({
  accessToken: payload.accessToken,
  refreshToken: payload.refreshToken,
});

reducer.on(didSignInAction, authanticateUser);
reducer.on(didSignUpAction, authanticateUser);
reducer.on(didUpdateTokensAction, authanticateUser);
reducer.on(signOutAction, () => ({}));

export default reducer;
