import React, { useState } from "react";
// import { Alert } from "react-bootstrap";

import { PrimaryButton } from "../common/Common/Common.styles";
import * as Form from "./Form.styles";
import FormInput from "./FormInput";
import { getCurrentUser } from "../../services/authService";
import config from "../../config";
const ProfileForm = (props) => {
  const userData = getCurrentUser();
  // const [userImage, setUserImage] = useState(userData.profilePic);
  const [user, setUser] = useState({
    name: userData.name != null ? userData.name : "",
    email: "",
    phone: "",
    branch: "",
    semester: "",
    profilePic: userData.profilePic,
  });
  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setUser((prevValue) => {
      if (type === "file") {
        let image = event.target.files[0];
        console.log(URL.createObjectURL(image));
        return { ...prevValue, [name]: image };
      } else return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    props.handleModal(false);
  };

  return (
    <Form.FormContainer action="" method="" onSubmit={handleSubmit}>
      <Form.FormHeading style={{ fontSize: "25px" }}>
        Edit Profile
      </Form.FormHeading>

      <div className="d-flex" style={{ columnGap: "20px" }}>
        <img
          src={config.url + userData.profilePic}
          width="100px"
          alt="Invalid"
          height="100px"
          style={{ marginRight: "20px" }}
        />
        <div>
          <FormInput
            icon="/images/common/user.svg"
            type="text"
            name="name"
            style={{ width: "350px" }}
            value={user.name}
            handleChange={handleChange}
            placeholder="Name"
          />
          <FormInput
            icon="/images/common/photo.svg"
            type="file"
            name="profilePic"
            placeholder="Profile Image"
            // value={user.profilePic}
            accept="image/png, image/gif, image/jpeg"
            handleChange={handleChange}
            style={{ width: "350px", display: "inline" }}
          />
          <FormInput
            icon="/images/common/mobile.svg"
            type="text"
            name="phone"
            style={{ width: "350px" }}
            value={user.phone}
            handleChange={handleChange}
            placeholder="Phone"
          />
          <FormInput
            icon="/images/common/branch.svg"
            type="text"
            name="branch"
            style={{ width: "350px" }}
            value={user.branch}
            handleChange={handleChange}
            placeholder="Branch"
          />
          <FormInput
            icon="/images/common/semester.svg"
            type="number"
            name="semester"
            style={{ width: "350px" }}
            value={user.semester}
            handleChange={handleChange}
            placeholder="Semester"
          />
        </div>
      </div>

      {/* {error &&
        // <Alert style={{ padding: "0.4rem 1rem" }} variant={"danger"}>
        //   {error.replaceAll(`"`, "") + "."}
        // </Alert>{}
        "dfd"} */}

      <PrimaryButton type="submit" className="mt-4">
        Save Changes
      </PrimaryButton>
    </Form.FormContainer>
  );
};

export default ProfileForm;
