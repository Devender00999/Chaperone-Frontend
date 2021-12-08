import React, { useState } from "react";
import * as Form from "./Form.styles";
import FormPassword from "./FormPassword";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form.FormContainer action="" method="">
      <Form.FormHeading>Create an account</Form.FormHeading>
      <Form.FormText>
        Already have an account? <Form.FormLink href="">Sign In</Form.FormLink>
      </Form.FormText>
      <Form.Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        type="text"
        placeholder="Name*"
        required
      />
      <Form.Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        type="email"
        placeholder="Email*"
        required
      />
      <Form.Input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        name="number"
        type="number"
        placeholder="Mobile Number*"
        required
      />
      <FormPassword
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <Form.FormLink href="" style={{ alignSelf: "flex-end" }}>
        Forget Password?
      </Form.FormLink>
      <Form.FormButton type="submit">Create Account</Form.FormButton>
    </Form.FormContainer>
  );
};

export default SignUpForm;
