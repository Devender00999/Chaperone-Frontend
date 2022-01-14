import React, { useState } from "react";
import { PrimaryButton } from "../common/Common/Common.styles";
import * as Form from "./Form.styles";
import FormInput from "./FormInput";
import ResetPassForm from "./ResetPassForm";
import SignInForm from "./SigninForm";
import Joi from "joi";
import { Alert } from "react-bootstrap";
import Request from "../../requests/request";
import port from "../../port";

const SignUpForm = (props) => {
  const [error, setError] = useState(null);
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

  const formatError = (error) => {
    error = error.replaceAll(`"`, "") + ".".slice(2);
    error = error[0].toLocaleUpperCase() + error.slice(1);
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error } = validateUser(user);
    if (error) setError(formatError(error.details[0].message));
    else {
      setError(null);

      Request.post("http://localhost:" + port + "/api/user/signup", user)
        .then((res) => {
          if (res.message === "Account Created Successfully") {
            localStorage.setItem("token", res.token);
            window.location.href = "/dashboard"
          }
          else {
            setError(res.message);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  const validateUser = (user) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email({ tlds: { allow: false } })
        .only(),
      password: Joi.string().min(8).max(32),
      number: Joi.string().required().length(10),
    });
    return schema.validate(user);
  };
  return (
    <Form.FormContainer action="" method="" onSubmit={handleSubmit}>
      <Form.FormHeading>Create an account</Form.FormHeading>
      <Form.FormText>
        Already have an account?
        <Form.FormLinkText
          onClick={(e) => props.changeComponent(e, SignInForm)}
        >
          Sign In
        </Form.FormLinkText>
      </Form.FormText>
      <FormInput
        icon="/images/common/user.svg"
        value={user.name}
        handleChange={handleChange}
        name="name"
        type="text"
        placeholder="Name"
      />
      <FormInput
        icon="/images/common/at.svg"
        type="email"
        name="email"
        placeholder="Email"
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
      />
      <FormInput
        icon="/images/common/eye.svg"
        iconHide="/images/common/eye-slash.svg"
        type="password"
        placeholder="Password"
        value={user.password}
        name="password"
        handleChange={handleChange}
        required
      />
      {error && (
        <Alert style={{ padding: "0.4rem 1rem" }} variant={"danger"}>
          {error}
        </Alert>
      )}
      <Form.FormLinkText
        style={{ alignSelf: "flex-end" }}
        onClick={(e) => props.changeComponent(e, ResetPassForm)}
      >
        Forget Password?
      </Form.FormLinkText>
      <PrimaryButton type="submit">Create Account</PrimaryButton>
    </Form.FormContainer>
  );
};

export default SignUpForm;
