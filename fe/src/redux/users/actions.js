import * as ActionTypes from './constants';

export const login = (payload) => {
  return {
    type: ActionTypes.USER_LOGIN,
    payload,
  };
};

export const fetchUser = (payload) => {
  return {
    type: ActionTypes.USER_FETCH,
    payload,
  };
};

export const userLoading = (payload) => {
  return {
    type: ActionTypes.USER_LOADING,
    payload,
  };
};

export const logout = (payload) => {
  return {
    type: ActionTypes.USER_LOGOUT,
    payload,
  };
};

export const register = (payload) => {
  return {
    type: ActionTypes.USER_REGISTER,
    payload,
  };
};
