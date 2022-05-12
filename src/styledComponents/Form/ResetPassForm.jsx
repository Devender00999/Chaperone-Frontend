/** @format */

import React, { useState } from "react";
import { PrimaryButton } from "../common/Common/Common.styles";
import * as Form from "./Form.styles";
import Joi from "joi";
import FormInput from "./FormInput";
import { Alert } from "react-bootstrap";
const ResetPassForm = () => {
  const [error, setError] = useState();
  const [user, setUser] = useState({
    email: "",
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
    else setError(null);
    if (user.password !== user.repassword)
      setError("Both Passwords doesn't match");
    else setError(null);
  };
  const validateUser = (user) => {
    const schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: false } })
        .only(),
    });
    return schema.validate(user);
  };

  return (
    <Form.FormContainer action="" method="" onSubmit={handleSubmit}>
      <Form.FormHeading>Reset Password</Form.FormHeading>
      <FormInput
        icon="/images/common/at.svg"
        type="email"
        name="email"
        value={user.email}
        placeholder="Email"
        handleChange={handleChange}
      />
      {error && (
        <Alert style={{ padding: "0.4rem 1rem" }} variant={"danger"}>
          {error}
        </Alert>
      )}
      <PrimaryButton style={{ marginTop: "20px" }} type="submit">
        Send Email
      </PrimaryButton>
    </Form.FormContainer>
  );
};

export default ResetPassForm;
