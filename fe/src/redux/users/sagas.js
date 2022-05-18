import { delay, put, takeLatest, takeLeading } from 'redux-saga/effects';
import * as ActionTypes from './actions';

function* handleLogin({ payload }) {
  console.log('user login work', payload);
  try {
    yield put(ActionTypes.userLoading(true));
    // call api
    const token = yield delay(1500, 'token');
    localStorage.setItem('token', token);

    yield put(ActionTypes.fetchUser({ username: 'tuan', role: 'admin' }));
    yield put(ActionTypes.userLoading(false));
  } catch (e) {
    console.log(e);
  }
}

function* login() {
  yield takeLeading(ActionTypes.login, handleLogin);
}

export { login };
