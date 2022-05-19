import { all } from 'redux-saga/effects';
import { login } from './users/sagas';

function* logTest() {
  console.log('root saga work!');
  yield;
}

export default function* rootSaga() {
  // yield all([logTest(), login()]);
  yield all([logTest()]);
}
