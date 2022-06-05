import { combineReducers } from "redux";
import admissionReducer from "./admissions";
import roadmapReducer from "./roadmaps";
import academicsReducer from "./academics";
import easybuyReducer from "./easybuy";

export default combineReducers({
   admissions: admissionReducer,
   roadmaps: roadmapReducer,
   academics: academicsReducer,
   easybuy: easybuyReducer,
});
