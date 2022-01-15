import * as admissionActions from "./admissionActions";
import * as userActions from "./userActions";
import * as academicsActions from "./academicsAction"
import * as careerActions from "./careerAction"

const Actions = {
   ...admissionActions,
   ...userActions,
   ...academicsActions,
   ...careerActions
};

export default Actions;
