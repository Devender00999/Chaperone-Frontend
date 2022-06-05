import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { TextareaAutosize } from "@mui/material";

const FormTextArea = ({
   label,
   name,
   minRows = 2,
   placeholder,
   onChange,
   value,
   ...otherProps
}) => {
   return (
      <Form.Group className="mb-2 mt-2 pe-0">
         <Form.Label> {label} </Form.Label>
         <TextareaAutosize
            minRows={minRows}
            value={value}
            placeholder={placeholder}
            name={name}
            className="form-control"
            onChange={onChange}
            {...otherProps}
         />
      </Form.Group>
   );
};

export default FormTextArea;
