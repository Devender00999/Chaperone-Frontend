/** @format */

import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../common/Common/Common.styles";
import { Alert } from "react-bootstrap";
import Joi from "joi";
import * as Form from "./Form.styles";
import FormInput from "./FormInput";
import ResetPassForm from "./ResetPassForm";
import SignUpForm from "./SignUpForm";
import http from "../../requests/request";
import port from "../../port";
import { Form as Form2 } from "react-bootstrap";
import FileBase64 from "react-file-base64";
const ProfileForm = (props) => {
  useEffect(() => {
    document.querySelectorAll("input[type=file]").forEach((item) => {
      item.setAttribute("accept", "image/x-png,image/jpeg");
      item.classList.add("form-control");
    });
  }, []);

  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    branch: "",
    semester: "",
    profileImg: "/images/common/user.svg",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    props.handleModal(false);
  };
  const handleFileChange = (e) => {
    let file = e.base64;
    setUser((prev) => ({ ...prev, profileImg: file }));
  };

  return (
    <Form.FormContainer action="" method="" onSubmit={handleSubmit}>
      <Form.FormHeading style={{ fontSize: "25px" }}>
        Edit Profile
      </Form.FormHeading>

      <div className="d-flex" style={{ columnGap: "20px" }}>
        <img
          src={user.profileImg}
          width="100px"
          alt="invalid image"
          height="100px"
          style={{ marginRight: "20px" }}
        />
        <div>
          <Form2.Group className="">
            <Form2.Label className="labelOnTop">Enter your name</Form2.Label>
            <Form2.Control
              type="text"
              name="name"
              style={{ width: "350px" }}
              value={user.name}
              onChange={handleChange}
            />
          </Form2.Group>
          <Form2.Group className="mt-3" style={{ width: "350px" }}>
            <Form2.Label className="labelOnTop">
              {"Profile Picture"}
            </Form2.Label>
            <input multiple={false} name="images" onDone={handleFileChange} />
          </Form2.Group>
          <Form2.Group className="">
            <Form2.Label className="labelOnTop">
              Enter your mobile no.
            </Form2.Label>
            <Form2.Control
              style={{ width: "350px" }}
              type="text"
              value={user.password}
              name="number"
              onChange={handleChange}
            />
          </Form2.Group>
          <Form2.Group className="">
            <Form2.Label className="labelOnTop">Email</Form2.Label>
            <Form2.Control
              style={{ width: "350px" }}
              type="email"
              value={user.email}
              name="email"
              onChange={handleChange}
            />
          </Form2.Group>
          <Form2.Group className="">
            <Form2.Label className="labelOnTop">Branch</Form2.Label>
            <Form2.Control
              style={{ width: "350px" }}
              type="text"
              value={user.branch}
              name="branch"
              onChange={handleChange}
            />
          </Form2.Group>
          <Form2.Group className="">
            <Form2.Label className="labelOnTop">Semester</Form2.Label>
            <Form2.Control
              style={{ width: "350px" }}
              type="number"
              value={user.semester}
              name="semester"
              onChange={handleChange}
            />
          </Form2.Group>
        </div>
      </div>

      {error && (
        <Alert style={{ padding: "0.4rem 1rem" }} variant={"danger"}>
          {error.replaceAll(`"`, "") + "."}
        </Alert>
      )}

      <PrimaryButton type="submit" className="mt-4">
        Save Changes
      </PrimaryButton>
    </Form.FormContainer>
  );
};

export default ProfileForm;
