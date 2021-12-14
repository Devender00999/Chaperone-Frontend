import React, { useState } from "react";
import * as Form from "./Form.styles";
import FormInput from "./FormInput";
import { FormButton } from "../../components/common/Button.styles";
const SignInForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <Form.FormContainer action="" method="" onSubmit={handleSubmit}>
      <Form.FormHeading>Sign In</Form.FormHeading>
      <Form.FormText>
        New User? <Form.FormLink href="">Create an Account</Form.FormLink>
      </Form.FormText>
      <FormInput
        icon="/images/common/at.svg"
        type="email"
        name="email"
        value={user.email}
        placeholder="Email"
        handleChange={handleChange}
        required
      />
      <FormInput
        icon="/images/common/eye.svg"
        iconHide="/images/common/eye-slash.svg"
        type="password"
        placeholder="Password"
        value={user.password}
        name="password"
        handleChange={handleChange}
      />

      <Form.FormLink href="" style={{ alignSelf: "flex-end" }}>
        Forget Password?
      </Form.FormLink>
      <FormButton type="submit">Sign In</FormButton>
    </Form.FormContainer>
  );
};

export default SignInForm;
