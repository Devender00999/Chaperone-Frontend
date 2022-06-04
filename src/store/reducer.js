import { combineReducers } from "redux";
import admissionReducers from "./admissions";
import academicsReducer from "./academics";

export default combineReducers({
    admissions: admissionReducers,
    academics: academicsReducer,
});
