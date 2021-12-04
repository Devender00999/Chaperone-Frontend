import React from "react";
import * as Form from "./Form.styles";

const SignUpForm = () => {
  return (
    <Form.FormContainer action="" method="">
      <Form.FormHeading>Create an account</Form.FormHeading>
      <Form.FormText>
        Already have an account? <Form.FormLink href="">Sign In</Form.FormLink>
      </Form.FormText>
      <Form.Input name="name" type="text" placeholder="Name*" required />
      <Form.Input name="email" type="email" placeholder="Email*" required />
      <Form.Input
        name="number"
        type="number"
        placeholder="Mobile Number*"
        required
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Password*"
        required
      />
      <Form.FormLink href="" style={{ alignSelf: "flex-end" }}>
        Forget Password?
      </Form.FormLink>
      <Form.FormButton type="submit">Create Account</Form.FormButton>
    </Form.FormContainer>
  );
};

export default SignUpForm;
