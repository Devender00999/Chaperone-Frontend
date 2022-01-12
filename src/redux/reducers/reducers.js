import { combineReducers } from "redux";
import { adArticleReducer } from "./adArticleReducer";

const reducers = combineReducers({
  allAdArticles: adArticleReducer,
});

export default reducers;
