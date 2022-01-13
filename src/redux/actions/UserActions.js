import ActionTypes from "../constants/ActionTypes";

export const createAccount = (user) => {
  return {
    type: ActionTypes.USER_CREATE_ACCOUNT,
    payload: user
  }
}