import React, { useState } from "react";
import { PrimaryButton } from "../common/Common/Common.styles";
import * as Form from "./Form.styles";
import FormInput from "./FormInput";

const SignUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form.FormContainer action="" method="" onSubmit={handleSubmit}>
      <Form.FormHeading>Create an account</Form.FormHeading>
      <Form.FormText>
        Already have an account? <Form.FormLink href="">Sign In</Form.FormLink>
      </Form.FormText>
      <FormInput
        icon="/images/common/user.svg"
        value={user.name}
        handleChange={handleChange}
        name="name"
        type="text"
        placeholder="Name"
        required
      />
      <FormInput
        icon="/images/common/at.svg"
        type="email"
        name="email"
        placeholder="Email"
        required={true}
        value={user.email}
        handleChange={handleChange}
      />

      <FormInput
        icon="/images/common/mobile.svg"
        value={user.number}
        handleChange={handleChange}
        name="number"
        type="number"
        placeholder="Mobile Number"
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
      <PrimaryButton type="submit">Create Account</PrimaryButton>
    </Form.FormContainer>
  );
};

export default SignUpForm;
