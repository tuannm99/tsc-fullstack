import { createSelector } from 'reselect';
import { initialState } from './reducer';

const user = (state) => state.userReducer || initialState;

const selectLoading = createSelector(user, (state) => state.isLoading);
const selectUser = createSelector(user, (state) => state.user);
const selectLoginSuccess = createSelector(user, (state) => state.loginSuccess);
const selectLoginFailed = createSelector(user, (state) => state.loginFailed);

export { selectLoading, selectUser, selectLoginSuccess, selectLoginFailed };
