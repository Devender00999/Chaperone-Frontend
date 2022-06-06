import { Alert } from "@mui/material";
import React from "react";

const ErrorMessage = ({ error, severity = "error", ...otherProps }) => {
   return (
      <Alert severity={severity} {...otherProps}>
         {error}
      </Alert>
   );
};

export default ErrorMessage;
