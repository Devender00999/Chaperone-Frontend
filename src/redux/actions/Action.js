import * as admissionActions from "./admissionActions"
import * as userActions from "./userActions"

const Actions = {
   ...admissionActions,
   ...userActions
}

export default Actions