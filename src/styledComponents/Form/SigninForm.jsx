/** @format */

import React, { useState } from "react";
import { PrimaryButton } from "../common/Common/Common.styles";
import { Alert } from "react-bootstrap";
import Joi from "joi";
// import { SideBarHeading } from "../SidePanel/SideBar.styles";

import * as Form from "./Form.styles";
import FormInput from "./FormInput";
import ResetPassForm from "./ResetPassForm";
import SignUpForm from "./SignUpForm";
import auth from "../../services/authService";

// import { useDispatch } from "react-redux";
// import Actions from "../../redux/actions/Action";

const SignInForm = (props) => {
  const [message, setMessage] = useState(null);
  // const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = validateUser(user);
    if (error) setMessage({ msg: error.message, type: "danger" });
    else setMessage(null);
    try {
      await auth.login(user.email, user.password);
      window.location.href = "/dashboard";
    } catch (err) {
      if (err.response) {
        setMessage({ msg: err.response.data.message, type: "danger" });
      } else {
        console.log(err.message);
      }
    }
  };
  const validateUser = (user) => {
    const schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: false } })
        .only(),
      password: Joi.string().min(8).max(32),
    });
    return schema.validate(user);
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

      {message && (
        <Alert style={{ padding: "0.4rem 1rem" }} variant={message.type}>
          {message.msg}
        </Alert>
      )}
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
