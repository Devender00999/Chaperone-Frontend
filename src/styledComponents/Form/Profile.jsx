import React, { useState } from "react";
import { PrimaryButton } from "../common/Common/Common.styles";
import { Alert } from "react-bootstrap";
import Joi from "joi";
import * as Form from "./Form.styles";
import FormInput from "./FormInput";
import ResetPassForm from "./ResetPassForm";
import SignUpForm from "./SignUpForm";
import Request from "../../requests/request";
import port from "../../port";
import { Form as Form2 } from "react-bootstrap";
const ProfileForm = (props) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isAdmin, setIsAdmin] = useState("user");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error } = validateUser(user);
    if (error) setError(error.details[0].message);
    else setError(null);
    let admin = isAdmin === "user" ? false : isAdmin === "admin" ? true : null;
    let postFormData = {
      ...user,
      isAdmin: admin,
    };
    Request.post("http://localhost:" + port + "/api/user/sinuser", postFormData)
      .then((res) => {
        if (!res.token) setError(res.message);
        else {
          localStorage.setItem("token", res.token);
          window.location.href = "/dashboard";
        }
      })
      .catch((err) => console.log(err));
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
      <Form.FormHeading style={{ fontSize: "25px" }}>
        Edit Profile
      </Form.FormHeading>

      <div className="d-flex" style={{ columnGap: "20px" }}>
        <img
          src="images/common/user.svg"
          width="100px"
          height="100px"
          style={{ marginRight: "20px" }}
        />
        <div>
          <Form2.Control
            type="email"
            name="email"
            style={{ width: "300px" }}
            value={user.email}
            placeholder="Email"
            handleChange={handleChange}
          />
          <Form2.Control
            style={{ width: "300px" }}
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
            handleChange={handleChange}
          />
          <Form2.Control
            style={{ width: "300px" }}
            icon="/images/common/eye.svg"
            iconHide="/images/common/eye-slash.svg"
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
            handleChange={handleChange}
          />
          <Form2.Control
            style={{ width: "300px" }}
            icon="/images/common/eye.svg"
            iconHide="/images/common/eye-slash.svg"
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
            handleChange={handleChange}
          />
          <Form2.Control
            style={{ width: "300px" }}
            icon="/images/common/eye.svg"
            iconHide="/images/common/eye-slash.svg"
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
            handleChange={handleChange}
          />
        </div>
      </div>

      {error && (
        <Alert style={{ padding: "0.4rem 1rem" }} variant={"danger"}>
          {error.replaceAll(`"`, "") + "."}
        </Alert>
      )}

      <PrimaryButton type="submit">Sign In</PrimaryButton>
    </Form.FormContainer>
  );
};

export default ProfileForm;
