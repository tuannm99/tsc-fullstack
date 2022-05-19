import * as ActionTypes from './constants';

export const initialState = {
  user: {},
  isLoading: false,
  loginSuccess: false,
  loginFailed: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return { ...state };
    case ActionTypes.USER_LOGIN_FAILED:
      return {
        ...state,
        loginFailed: true,
        isLoading: false,
        loginSuccess: false,
      };
    case ActionTypes.USER_LOADING:
      return {
        ...state,
        isLoading: true,
        loginSuccess: false,
        loginFailed: false,
      };
    case ActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          role: action.payload.role,
          username: action.payload.username,
        },
        loginFailed: false,
      };

    case ActionTypes.USER_LOGOUT:
      return { ...state, user: {} };

    case ActionTypes.USER_REGISTER:
      return { ...state };

    default:
      return state;
  }
};

export default userReducer;
