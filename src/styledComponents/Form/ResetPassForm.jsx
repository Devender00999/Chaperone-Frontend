import React, { useState } from "react";
import { PrimaryButton } from "../common/Common/Common.styles";
import * as Form from "./Form.styles";
import FormInput from "./FormInput";
const ResetPassForm = () => {
  const [user, setUser] = useState({
    password: "",
    repassword: "",
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
      <Form.FormHeading>Reset Password</Form.FormHeading>

      <FormInput
        icon="/images/common/eye.svg"
        iconHide="/images/common/eye-slash.svg"
        type="password"
        name="password"
        value={user.password}
        placeholder="Password"
        handleChange={handleChange}
        required
      />
      <FormInput
        icon="/images/common/eye.svg"
        iconHide="/images/common/eye-slash.svg"
        type="password"
        placeholder="Confirm Password"
        value={user.repassword}
        name="repassword"
        handleChange={handleChange}
      />

      <PrimaryButton style={{ marginTop: "20px" }} type="submit">
        Reset Password
      </PrimaryButton>
    </Form.FormContainer>
  );
};

export default ResetPassForm;
