import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import SelectTag from "../../styledComponents/SelectTag/SelectTag";

const FormSelect = ({
   label,
   name,
   options,
   onChange,
   style,
   defaultValue,
   value,
   ...otherProps
}) => {
   return (
      <Form.Group className="mb-2 mt-2" style={style}>
         {label && <Form.Label>{label} </Form.Label>}
         {label && <br />}
         <SelectTag
            defaultValue={defaultValue}
            options={options}
            value={value}
            style={{
               width: "100%",
               border: "1px solid #ced4da",
               backgroundColor: "transparent",
               borderRadius: "4px",
            }}
            onChange={onChange}
            name={name}
            {...otherProps}
         />
      </Form.Group>
   );
};

export default FormSelect;
