import { combineReducers } from "redux";
import { adArticleReducer } from "./adArticleReducer";
import { userReducer, adminReducer } from "./userReducer";
import { acaArticleReducer } from "./acaArticleReducer";

const reducers = combineReducers({
  user: userReducer,
  admin: adminReducer,
  allAdArticles: adArticleReducer,
  allAcaArticles: acaArticleReducer,
})

export default reducers
