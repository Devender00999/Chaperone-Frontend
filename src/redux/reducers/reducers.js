import { combineReducers } from "redux";
import { adArticleReducer } from "./adArticleReducer";
import { userReducer, adminReducer } from "./userReducer";
import { acaArticleReducer } from "./acaArticleReducer";
import { careerReducer } from "./careerReducer";
import admissionsReducer from "../admissions";
const reducers = combineReducers({
  user: userReducer,
  admin: adminReducer,
  allAdArticles: adArticleReducer,
  admissions: admissionsReducer,
  allAcaArticles: acaArticleReducer,
  careerArticles: careerReducer,
});

export default reducers;
