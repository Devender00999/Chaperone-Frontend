import * as admissionActions from "./admissionActions";
import * as userActions from "./UserActions";

const Actions = {
   ...admissionActions,
   ...userActions,
};

export default Actions;
