import { createReducer } from '@reduxjs/toolkit';
import { IUserState } from 'interfaces/reducers/user';
import { didSignInAction } from 'store/actions';

const initialState: IUserState = {
  firstName: '',
  lastName: '',
  email: '',
};

const reducer = createReducer<IUserState>(initialState, builder =>
  builder.addCase(didSignInAction, (state, { payload }) => {
    const { accessToken, refreshToken, ...userData } = payload;
    return userData;
  }),
);

export default reducer;
