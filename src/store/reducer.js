import { combineReducers } from "redux";
import admissionReducer from "./admissions";
import roadmapReducer from "./roadmaps";
import academicsReducer from "./academics";
import careerAwareReducer from "./careeraware";
import easybuyReducer from "./easybuy";
import doubtdeskReducer from "./doubtdesk";
import findPGReducer from "./findPG";
import homescreenReducer from "./homescreen";

export default combineReducers({
   admissions: admissionReducer,
   roadmaps: roadmapReducer,
   academics: academicsReducer,
   careerAware: careerAwareReducer,
   easybuy: easybuyReducer,
   doubtdesk: doubtdeskReducer,
   findPG: findPGReducer,
   homescreen: homescreenReducer,
});
