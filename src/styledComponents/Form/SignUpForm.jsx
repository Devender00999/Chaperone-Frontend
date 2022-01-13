import React, { useState } from "react";
import { PrimaryButton } from "../common/Common/Common.styles";
import * as Form from "./Form.styles";
import FormInput from "./FormInput";
import ResetPassForm from "./ResetPassForm";
import SignInForm from "./SigninForm";
import Joi from "joi";
import { Alert } from "react-bootstrap";
const SignUpForm = (props) => {
  const [error, setError] = useState(null);
import Request from "../../requests/request";
import port from "../../port"
import { useDispatch } from "react-redux";
import Actions from "../../redux/actions/Action";

const SignUpForm = (props) => {
  const dispatch = useDispatch();
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
    else setError(null);
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
    Request.post("http://localhost:" + port + "/login/SignUp", user)
			.then((res) => {
				if (res.message !== "Email account exist") {
					const userData = {
						id: res.user.id,
						name: res.user.name,
						email: res.user.email,
						mobNo: res.user.mobNo,
					}
					dispatch(Actions.createAccount(userData));
          localStorage.setItem("user",JSON.stringify({name: "Deepak Kumar", isAdmin: true }))
				}
			})
			.catch(err => console.log(err))
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
