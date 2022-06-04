import { combineReducers } from "redux";
import admissionReducer from "./admissions";
import roadmapReducer from "./roadmaps";

export default combineReducers({
	admissions: admissionReducer,
	roadmaps: roadmapReducer,
});
