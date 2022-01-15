import admissionActionType from "./admissionActionTypes"
import userActionType from "./userActionTypes"
import academicsActionType from "./academicsActionTypes"
import careerActionType from "./careerActionTypes"

const ActionTypes = {
   ...admissionActionType,
   ...userActionType,
   ...academicsActionType,
   ...careerActionType
}

export default ActionTypes