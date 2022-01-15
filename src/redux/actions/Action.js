import * as admissionActions from "./admissionActions";
import * as userActions from "./userActions";
import * as academicsActions from "./academicsAction"

const Actions = {
   ...admissionActions,
   ...userActions,
   ...academicsActions
};

export default Actions;
