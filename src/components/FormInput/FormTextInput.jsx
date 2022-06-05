import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const FormTextInput = ({
   label,
   name,
   placeholder,
   onChange,
   style,
   type,

   value,
   ...otherProps
}) => {
   return (
      <Form.Group className="mb-2 mt-2" style={style}>
         <Form.Label>{label} </Form.Label>

         <Form.Control
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            {...otherProps}
         />
      </Form.Group>
   );
};

export default FormTextInput;
