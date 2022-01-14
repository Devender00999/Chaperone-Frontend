import ActionTypes from "../constants/ActionTypes";

export const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_CREATE_ACCOUNT:
      return { ...payload };
    case ActionTypes.USER_LOGGED_IN:
      return { ...payload };
    default:
      return state;
  }
};

export const adminReducer = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
