/** @format */

import React, { useState } from "react";
import { PrimaryButton } from "../common/Common/Common.styles";
import * as Form from "./Form.styles";
import FormInput from "./FormInput";
import ResetPassForm from "./ResetPassForm";
import SignInForm from "./SigninForm";
import Joi from "joi";
import { Alert } from "react-bootstrap";
import http from "../../services/httpService";
import { loginWithJwt } from "../../services/authService";
import apiConfig from "../../config";

const apiEndpoint = apiConfig.apiUrl + "/users/signup";

const SignUpForm = (props) => {
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setUser((prevValue) => {
      if (type === "file") {
        return { ...prevValue, [name]: event.target.files[0] };
      } else return { ...prevValue, [name]: value };
    });
  };

  const formatError = (error) => {
    error = error.replaceAll(`"`, "") + ".".slice(2);
    error = error[0].toLocaleUpperCase() + error.slice(1);
    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = validateUser(user);
    const userDetails = new FormData();
    userDetails.append("name", user.name);
    userDetails.append("email", user.email);
    userDetails.append("phone", user.phone);
    userDetails.append("password", user.password);
    userDetails.append("profilePic", user.profilePic);

    if (error)
      setMessage({
        msg: formatError(error.details[0].message),
        type: "danger",
      });
    else {
      setMessage(null);
      // return;
      try {
        const { data } = await http.post(apiEndpoint, userDetails);
        setMessage({ msg: data.message, type: "danger" });
        loginWithJwt(data.token);
        window.location.href = "/";
      } catch (err) {
        if (err.response) {
          setMessage({ msg: err.response.data.message, type: "danger" });
        } else {
          console.log(err.message);
        }
      }
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
      phone: Joi.string().required().length(10),
      profilePic: Joi.object().required(),
    });
    return schema.validate(user);
  };
  return (
    <Form.FormContainer
      action=""
      method=""
      onSubmit={handleSubmit}
      enctype="multipart/form-data"
    >
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
        value={user.phone}
        handleChange={handleChange}
        name="phone"
        type="number"
        placeholder="Mobile Number"
      />
      <FormInput
        icon="/images/common/photo.svg"
        type="file"
        name="profilePic"
        placeholder="Profile Image"
        // value={user.profileImg}
        accept="image/png, image/gif, image/jpeg"
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
        required
      />
      {message && (
        <Alert style={{ padding: "0.4rem 1rem" }} variant={message.type}>
          {message.msg}
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
