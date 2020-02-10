import { put, call, select, all, takeLatest } from 'redux-saga/effects';
import { signInAction } from '../actions';
import ISignInAction from '../actions/auth/ISignInAction';

function* signInSaga({ payload }: { payload: ISignInAction }): Generator {
}

export default function* authSaga(): Generator {
  yield all([takeLatest(signInAction, signInSaga)]);
}
