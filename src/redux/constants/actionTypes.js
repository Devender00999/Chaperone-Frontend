import admissionActionType from "./admissionActionTypes"
import userActionType from "./userActionTypes"

const ActionTypes = {
   ...admissionActionType,
   ...userActionType
}

export default ActionTypes