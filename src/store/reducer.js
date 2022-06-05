import { combineReducers } from "redux";
import admissionReducer from "./admissions";
import roadmapReducer from "./roadmaps";
import academicsReducer from "./academics";
import careerAwareReducer from "./careeraware";

export default combineReducers({
   admissions: admissionReducer,
   roadmaps: roadmapReducer,
   academics: academicsReducer,
   careerAware: careerAwareReducer,
});
