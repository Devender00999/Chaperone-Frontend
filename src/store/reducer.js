import { combineReducers } from "redux";
import admissionReducer from "./admissions";

export default combineReducers({
  admissions: admissionReducer,
});
