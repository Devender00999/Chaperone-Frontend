import React, { useState } from "react";
import { PrimaryButton } from "../common/Common/Common.styles";
import * as Form from "./Form.styles";
import FormInput from "./FormInput";
import ResetPassForm from "./ResetPassForm";
import SignInForm from "./SigninForm";
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
        required
      />

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
