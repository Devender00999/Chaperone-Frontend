import React from "react";
import * as Form from "./Form.styles";

const FormPassword = ({
  password,
  setPassword,
  showPassword,
  setShowPassword,
}) => {
  return (
    <Form.FormPasswordContainer>
      <Form.FormShowPassword
        src="/images/show-password.svg"
        onClick={() => setShowPassword(!showPassword)}
      />
      <Form.Input
        type={showPassword ? "text" : "password"}
        placeholder="Password*"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Form.FormPasswordContainer>
  );
};

export default FormPassword;
