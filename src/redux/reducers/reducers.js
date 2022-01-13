import { combineReducers } from "redux";
import { adArticleReducer } from "./adArticleReducer";
import { userReducer, adminReducer } from "./userReducer";

const reducers = combineReducers({
  user: userReducer,
  admin: adminReducer,
  allAdArticles: adArticleReducer
})

export default reducers
