import { createReducer } from 'redux-act';

import { didSignInAction } from '../actions';

interface AuthState {
  accessToken?: string;
  refreshToken?: string;
}

const reducer = createReducer<AuthState>({}, {});

reducer.on(
  didSignInAction,
  (state: AuthState, payload: Record<string, string>): AuthState => ({
    ...state,
    ...payload,
  }),
);

export default reducer;
