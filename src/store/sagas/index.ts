import { all } from 'redux-saga/effects';
import authSaga from './auth';
import configSaga from './config';

export default function* rootSaga(): Generator {
  yield all([authSaga(), configSaga()]);
}
