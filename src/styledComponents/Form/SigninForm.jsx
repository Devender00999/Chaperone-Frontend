import React from "react";
import * as Form from "./Form.styles";

const SignInForm = () => {
  return (
    <Form.FormContainer action="" method="">
      <Form.FormHeading>Sign In</Form.FormHeading>
      <Form.FormText>
        New User? <Form.FormLink href="">Create an Account</Form.FormLink>
      </Form.FormText>
      <Form.Input type="email" placeholder="Email*" required />
      <Form.Input type="password" placeholder="Password*" required />
      <Form.FormLink href="" style={{ alignSelf: "flex-end" }}>
        Forget Password?
      </Form.FormLink>
      <Form.FormButton type="submit">Sign In</Form.FormButton>
    </Form.FormContainer>
  );
};

export default SignInForm;
