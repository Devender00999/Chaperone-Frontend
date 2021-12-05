import React, { useState } from "react";
import * as Form from "./Form.styles";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Form.FormContainer action="" method="">
      <Form.FormHeading>Sign In</Form.FormHeading>
      <Form.FormText>
        New User? <Form.FormLink href="">Create an Account</Form.FormLink>
      </Form.FormText>
      <Form.Input type="email" placeholder="Email*" required />
      <Form.FormPasswordContainer>
        <Form.FormShowPassword
          src="/images/show-password.svg"
          onClick={() => setShowPassword(!showPassword)}
        />
        <Form.Input
          type={showPassword ? "text" : "password"}
          placeholder="Password*"
          required
        />
      </Form.FormPasswordContainer>

      <Form.FormLink href="" style={{ alignSelf: "flex-end" }}>
        Forget Password?
      </Form.FormLink>
      <Form.FormButton type="submit">Sign In</Form.FormButton>
    </Form.FormContainer>
  );
};

export default SignInForm;
