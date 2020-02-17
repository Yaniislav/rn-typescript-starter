import { all } from 'redux-saga/effects';
import authSaga from './auth';

export default function* rootSaga(): Generator {
  yield all([authSaga()]);
}
