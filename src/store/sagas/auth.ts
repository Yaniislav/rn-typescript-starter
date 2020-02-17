import { put, call, select, all, takeLatest } from 'redux-saga/effects';
import { signInAction, didSignInAction } from '../actions';
import { get } from './api';
import ISignInAction from '../actions/auth/ISignInAction';

function* signInSaga({
  payload: { email },
}: {
  payload: ISignInAction;
}): Generator {
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
  console.log('Here12');

  yield all([takeLatest(signInAction, signInSaga)]);
}
