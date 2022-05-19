import React, { useState } from "react";
import * as Form from "./Form.styles";

const FormInput = ({ icon, type, value, placeholder, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Form.FormInputContainer>
      <Form.Icon
        src={props.iconHide ? (showPassword ? props.iconHide : icon) : icon}
        style={
          type === "password" ? { cursor: "pointer" } : { cursor: "unset" }
        }
        onClick={() => setShowPassword(!showPassword)}
        alt={placeholder}
        draggable={false}
      />
      <Form.Input
        className="formInput"
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder + "*"}
        value={value}
        {...props}
        onChange={props.handleChange}
      />
    </Form.FormInputContainer>
  );
};

export default FormInput;
