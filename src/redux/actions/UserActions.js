import ActionTypes from "../constants/ActionTypes";

export const createAccount = (user) => ({
  type: ActionTypes.SET_ALL_ADMISSION_ARTICLES,
  payload: user,
});