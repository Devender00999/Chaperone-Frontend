import React, { useState } from "react";
import { PrimaryButton } from "../common/Common/Common.styles";
import { Alert } from "react-bootstrap";
import Joi from "joi";
// import { SideBarHeading } from "../SidePanel/SideBar.styles";
import * as Form from "./Form.styles";
import FormInput from "./FormInput";
import ResetPassForm from "./ResetPassForm";
import SignUpForm from "./SignUpForm";
import Request from "../../requests/request";
import port from "../../port";
// import { useDispatch } from "react-redux";
// import Actions from "../../redux/actions/Action";

const SignInForm = (props) => {
  const [error, setError] = useState(null);
  // const dispatch = useDispatch();
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
      isAdmin: admin
    }
    Request.post("http://localhost:" + port + "/api/user/sinuser", postFormData)
      .then((res) => {
        localStorage.setItem(
          "token",
          res.token
        );
        window.location.href = "/dashboard"
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
      <div className="d-flex pt-3">
        <div className="form-check">
          <label htmlFor="user" className="form-check-label cursor-pointer">
            <input
              className="form-check-input "
              name="isAdmin"
              id="user"
              type="radio"
              value="user"
              checked={isAdmin === "user"}
              onClick={() => setIsAdmin("user")}
              readOnly
            />
            User
          </label>
        </div>
        <div className="form-check">
          <label
            htmlFor="admin"
            className="form-check-label ms-3 cursor-pointer"
          >
            <input
              className="form-check-input"
              name="isAdmin"
              id="admin"
              type="radio"
              value="admin"
              checked={isAdmin === "admin"}
              onClick={() => setIsAdmin("admin")}
              readOnly
            />
            Admin
          </label>
        </div>
      </div>
      {error && (
        <Alert style={{ padding: "0.4rem 1rem" }} variant={"danger"}>
          {error.replaceAll(`"`, "") + "."}
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
