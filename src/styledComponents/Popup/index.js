import React, { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Popup = () => {
   const [open, setOpen] = useState(true);

   return (
      <Dialog open={open} onClose={() => setOpen(false)}>
         <DialogTitle>Are you sure?</DialogTitle>
         <DialogContent>
            <DialogContentText id="alert-dialog-description">
               You are about to to delete this roadmap. Are you sure you want to
               continue?
            </DialogContentText>
         </DialogContent>
         <DialogActions>
            <PrimaryButton>Yes</PrimaryButton>
            <PrimaryButton>No</PrimaryButton>
         </DialogActions>
      </Dialog>
   );
};

export default Popup;
