import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUser = (state) => state.userReducer || initialState;

const selectLoading = createSelector(selectUser, (state) => state.isLoading);
const username = createSelector(selectUser, (state) => state.username);

export { selectLoading, username };
