import admissionActionType from "./admissionActionTypes"
import userActionType from "./userActionTypes"
import academicsActionType from "./academicsActionTypes"

const ActionTypes = {
   ...admissionActionType,
   ...userActionType,
   ...academicsActionType
}

export default ActionTypes