import * as ActionTypes from './constants';

export const initialState = {
  username: '',
  role: '',
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return { ...state };
    case ActionTypes.USER_LOADING:
      return { ...state, isLoading: action.payload };
    case ActionTypes.USER_FETCH:
      return {
        ...state,
        role: action.payload.role,
        username: action.payload.username,
      };

    case ActionTypes.USER_LOGOUT:
      return { ...state };

    case ActionTypes.USER_REGISTER:
      return { ...state };

    default:
      return state;
  }
};

export default userReducer;
