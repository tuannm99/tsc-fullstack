import { put, takeLeading } from 'redux-saga/effects';
import * as ActionTypes from './actions';

function* handleLogin({ payload }) {
  // console.log('user login work', payload);
  // try {
  // yield put(ActionTypes.userLoading(true));
  // yield put(
  // ActionTypes.loginSuccess({
  // username: payload.username,
  // role: payload.role,
  // })
  // );
  // yield put(ActionTypes.userLoading(false));
  // } catch (e) {
  // console.log(e);
  // }
}

function* login() {
  yield takeLeading(ActionTypes.login, handleLogin);
}

export { login };
