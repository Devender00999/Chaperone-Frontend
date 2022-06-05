import { combineReducers } from "redux";
import admissionReducer from "./admissions";
import roadmapReducer from "./roadmaps";
import academicsReducer from "./academics";
import careerAwareReducer from "./careeraware";
import easybuyReducer from "./easybuy";
import doubtdeskReducer from "./doubtdesk";

export default combineReducers({
   admissions: admissionReducer,
   roadmaps: roadmapReducer,
   academics: academicsReducer,
   careerAware: careerAwareReducer,
   easybuy: easybuyReducer,
   doubtdesk: doubtdeskReducer,
});
