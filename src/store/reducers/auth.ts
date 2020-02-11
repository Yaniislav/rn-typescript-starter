import { createReducer } from 'redux-act';

import { didSignInAction } from '../actions';

export interface IAuthState {
  accessToken?: string;
  refreshToken?: string;
}

const reducer = createReducer<IAuthState>({}, {});

reducer.on(
  didSignInAction,
  (state: IAuthState, payload: Record<string, string>): IAuthState => ({
    ...state,
    ...payload,
  }),
);

export default reducer;
