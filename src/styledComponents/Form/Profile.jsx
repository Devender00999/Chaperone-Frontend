import React, { useEffect, useState } from "react";
// import { Alert } from "react-bootstrap";

import { PrimaryButton } from "../common/Common/Common.styles";
import * as Form from "./Form.styles";
import FormInput from "./FormInput";
import { getCurrentUser } from "../../services/authService";
import config from "../../config";
import { useDispatch, useSelector } from "react-redux";
import * as academicsAction from "../../store/academics";
import Loader from "../../components/Loader/Loader";
import FormSelect from "../../components/FormInput/FormSelect";
import * as userActions from "../../store/user";

const ProfileForm = (props) => {
   const dispatch = useDispatch();

   const userData = getCurrentUser();

   const branches = useSelector((state) => state.academics.branches);
   const semesters = useSelector((state) => state.academics.semesters);
   const loading = useSelector((state) => state.academics.loading);

   const [user, setUser] = useState({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      branch: userData.branch,
      semester: userData.semester,
      profilePic: userData.profilePic,
   });

   useEffect(() => {
      dispatch(academicsAction.loadSemesters());
      dispatch(academicsAction.loadBranches());
   }, [dispatch]);

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

   const handleSubmit = async (e) => {
      e.preventDefault();

      const form = new FormData();
      for (var key in user) {
         form.append(key, user[key]);
      }

      const result = await dispatch(
         userActions.updateUserDetails(userData.email, form)
      );
      if (result.status !== 200) console.log(result.statusText);

      console.log(result.data);
      props.handleModal(false);
   };

   return loading ? (
      <Loader />
   ) : (
      <Form.FormContainer onSubmit={handleSubmit}>
         <Form.FormHeading style={{ fontSize: "25px" }}>
            Edit Profile
         </Form.FormHeading>

         <div className="d-flex" style={{ columnGap: "20px" }}>
            <img
               src={
                  typeof user.profilePic === "string"
                     ? user.profilePic.includes("http")
                        ? user.profilePic
                        : config.url + user.profilePic
                     : URL.createObjectURL(user.profilePic)
               }
               width="100px"
               alt="Invalid"
               height="100px"
               style={{ marginRight: "20px", borderRadius: "50%" }}
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
               <FormSelect
                  icon="/images/common/semester.svg"
                  defaultValue="Select Your Branch"
                  value={user.branch}
                  name="branch"
                  onChange={handleChange}
                  options={branches}
               />

               <FormSelect
                  icon="/images/common/semester.svg"
                  defaultValue="Select Your Semester"
                  name="semester"
                  value={user.semester}
                  onChange={handleChange}
                  options={semesters}
               />
            </div>
         </div>

         <PrimaryButton type="submit" className="mt-4">
            Save Changes
         </PrimaryButton>
      </Form.FormContainer>
   );
};

export default ProfileForm;
