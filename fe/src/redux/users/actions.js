import * as ActionTypes from './constants';

export const login = (payload) => {
  return {
    type: ActionTypes.USER_LOGIN,
    payload,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: ActionTypes.USER_LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailed = (payload) => {
  return {
    type: ActionTypes.USER_LOGIN_FAILED,
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
