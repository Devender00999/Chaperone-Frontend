import React from "react";
import {
  FormContainer,
  FormHeading,
  FormLink,
  FormText,
  Input,
  FormButton,
} from "./Form.styles";

const SignInForm = () => {
  return (
    <FormContainer action="" method="">
      <FormHeading>Sign In</FormHeading>
      <FormText>
        New User? <FormLink href="">Create an Account</FormLink>
      </FormText>
      <Input type="email" placeholder="Email*" required />
      <Input type="password" placeholder="Password*" required />
      <FormLink href="" style={{ alignSelf: "flex-end" }}>
        Forget Password
      </FormLink>
      <FormButton type="submit">Sign In</FormButton>
    </FormContainer>
  );
};

export default SignInForm;
