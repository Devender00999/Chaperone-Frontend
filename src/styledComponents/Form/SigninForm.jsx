import React, { useState } from "react";
import { PrimaryButton } from "../common/Common/Common.styles";
import { SideBarHeading } from "../SidePanel/SideBar.styles";
import * as Form from "./Form.styles";
import FormInput from "./FormInput";
import ResetPassForm from "./ResetPassForm";
import SignUpForm from "./SignUpForm";
const SignInForm = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log(props);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form.FormContainer action="" method="" onSubmit={handleSubmit}>
      <Form.FormHeading>Sign In</Form.FormHeading>
      <Form.FormText>
        New User?{" "}
        <Form.FormLinkText
          onClick={(e) => props.changeComponent(e, SignUpForm)}
        >
          Create an Account
        </Form.FormLinkText>
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

      <div style={{ alignSelf: "flex-end" }}>
        <Form.FormLinkText
          onClick={(e) => props.changeComponent(e, ResetPassForm)}
          style={{ alignSelf: "flex-end" }}
        >
          Forget Password?
        </Form.FormLinkText>
      </div>
      <PrimaryButton type="submit">Sign In</PrimaryButton>
    </Form.FormContainer>
  );
};

export default SignInForm;
