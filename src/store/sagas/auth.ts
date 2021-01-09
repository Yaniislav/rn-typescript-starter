import { put, call, select, all, takeLatest } from 'redux-saga/effects';
import { signInAction, didSignInAction } from '../actions';
import { get } from './api';

function* signInSaga({
  payload: { email },
}: ReturnType<typeof signInAction>): Generator {
  yield put(
    didSignInAction({
      email,
      accessToken: 'mock',
      refreshToken: 'mock',
      firstName: 'Test',
      lastName: 'Test',
    }),
  );
}

export default function* authSaga(): Generator {
  yield all([takeLatest(signInAction, signInSaga)]);
}
