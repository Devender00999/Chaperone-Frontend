import ActionTypes from "../constants/ActionTypes";

export const createAccount = (user) => {
  return {
    type: ActionTypes.USER_CREATE_ACCOUNT,
    payload: user
  }
}

export const userLoggedIn = (user) => {
  return {
    type: ActionTypes.USER_LOGGED_IN,
    payload: user
  }
}