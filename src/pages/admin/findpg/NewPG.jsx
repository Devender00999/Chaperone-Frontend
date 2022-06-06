import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import {
   MainContent,
   PageHeading,
   OutlinedButton,
} from "../../../styledComponents/common/Common/Common.styles";
import RightSideBar from "../../../styledComponents/SidePanel/RightSideBar";
import FormTextInput from "../../../components/FormInput/FormTextInput";
import FormTextArea from "../../../components/FormInput/FormTextArea";
import * as findPGActions from "../../../store/findPG";
import Loader from "../../../components/Loader/Loader";
import FormSelect from "../../../components/FormInput/FormSelect";

const initialValues = {
   amenities: "",
   address: "",
   distanceFromClg: "",
   distanceFromMetro: "",
   gender: "",
   houseRules: "",
   images: [],
   location: "",
   otherCharges: "",
   ratePerMonth: 0,
   ownerName: "",
   ownerNumber: "",
};

const NewPG = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const pgDetails = useSelector((state) => state.findPG.selectedPGDetails);
   const loading = useSelector((state) => state.findPG.loading);
   const error = useSelector((state) => state.findPG.error);

   const [formData, setFormData] = useState(initialValues);

   useEffect(() => {
      if (id && id !== "new") dispatch(findPGActions.loadPGDetails(id));
   }, [dispatch, id]);

   // Showing errors
   useEffect(() => {
      if (error && loading === false) {
         if (error.message.message) {
            toast.error(error.message.message);
         } else {
            toast.error(error.statusMessage);
         }
      }
   }, [error, loading]);

   useEffect(() => {
      let article;
      if (id) {
         article = pgDetails;

         console.log(pgDetails);
         if (article) {
            setFormData(article);
         }
      }
      if (id === "new") {
         setFormData(initialValues);
      }
   }, [pgDetails, id]);

   const handleChange = (e) => {
      let { type, value, name } = e.target;

      if (type === "file") {
         value = e.target.files;
      }

      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (article) => {
      const form = new FormData();

      for (var key in article) {
         if (key !== "images") form.append(key, article[key]);
      }

      for (var image of article.images) {
         form.append("images", image);
      }

      let result;

      if (id === "new") {
         result = await dispatch(findPGActions.addPGDetails(form));
         if (result.status === 200) {
            toast.success("Data Added Successfully");
         }
      } else {
         result = await dispatch(findPGActions.updatePGDetails(id, form));
         if (result.status === 200) {
            toast.success("Data Updated Successfully");
         }
      }

      if (result.status === 200) {
         navigate("/admin/find-pg");
      }
   };

   return loading ? (
      <Loader />
   ) : (
      <>
         <MainContent
            direction={"column"}
            flex={4}
            style={{ paddingBottom: "10px" }}
         >
            <PageHeading style={{ marginBottom: "10px" }}>Find PG</PageHeading>
            <div>
               <Row
                  style={{
                     marginRight: 0,
                     padding: 0,
                     flexDirection: "column",
                     columnGap: "20px",
                  }}
                  className="removeGutter"
               >
                  <div className="d-flex" style={{ columnGap: "20px" }}>
                     <FormTextInput
                        label="Location"
                        type="text"
                        value={formData.location}
                        name="location"
                        placeholder="Enter pg name"
                        style={{ flex: 1 }}
                        onChange={handleChange}
                     />

                     <FormTextInput
                        label="Price Range"
                        type="number"
                        value={formData.ratePerMonth}
                        placeholder="Enter rent/month"
                        name="ratePerMonth"
                        style={{ flex: 1 }}
                        onChange={handleChange}
                     />
                  </div>
                  <FormTextArea
                     label="Address"
                     name="address"
                     value={formData.address}
                     placeholder="Enter address"
                     onChange={handleChange}
                  />
                  <div className="mb-2 d-flex" style={{ columnGap: "20px" }}>
                     <FormTextInput
                        label="Upload Images"
                        name="images"
                        onChange={handleChange}
                        style={{ flex: 1 }}
                        multiple="multiple"
                        accept="image/*"
                        type="file"
                     />

                     <FormSelect
                        label="For Girls/Boys"
                        defaultValue="Select Gender"
                        name="gender"
                        options={["Girls", "Boys"]}
                        style={{ flex: 1 }}
                        value={formData.gender}
                        onChange={handleChange}
                     />
                  </div>

                  <div className="mb-2 d-flex" style={{ columnGap: "20px" }}>
                     <FormTextInput
                        label="Owner's Name"
                        name="ownerName"
                        type="name"
                        placeholder="Enter owner's name"
                        onChange={handleChange}
                        style={{ flex: 1 }}
                        value={formData.ownerName}
                     />

                     <FormTextInput
                        label="Owner Number"
                        name="ownerNumber"
                        type="number"
                        style={{ flex: 1 }}
                        placeholder="Enter owner's number"
                        onChange={handleChange}
                        value={formData.ownerNumber}
                        maxLength={10}
                        minLength={10}
                     />
                  </div>

                  <div className="mb-2 d-flex" style={{ columnGap: "20px" }}>
                     <FormTextInput
                        label="Distance from College"
                        name="distanceFromClg"
                        type="number"
                        placeholder="What is the distance from College?"
                        onChange={handleChange}
                        style={{ flex: 1 }}
                        value={formData.distanceFromClg}
                     />

                     <FormTextInput
                        label="Distance from Metro"
                        name="distanceFromMetro"
                        type="number"
                        style={{ flex: 1 }}
                        placeholder="What is the distance from Metro"
                        onChange={handleChange}
                        value={formData.distanceFromMetro}
                     />
                  </div>

                  <FormTextArea
                     label="Amenties"
                     value={formData.amenities}
                     name="amenities"
                     placeholder="Enter ementies"
                     onChange={handleChange}
                  />

                  <FormTextArea
                     label="House Rules"
                     value={formData.houseRules}
                     name="houseRules"
                     type="text"
                     placeholder="Enter rules & regulations"
                     onChange={handleChange}
                  />

                  <FormTextArea
                     label="Other Charges"
                     value={formData.otherCharges}
                     name="otherCharges"
                     type="text"
                     placeholder="Enter other charges (if any)"
                     onChange={handleChange}
                  />
               </Row>

               <OutlinedButton
                  variant="outlined"
                  onClick={() => handleSubmit(formData)}
                  className="btn"
                  type="submit"
               >
                  Upload Note
               </OutlinedButton>
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: markup }} /> */}
         </MainContent>
         <RightSideBar />
      </>
   );
};

export default NewPG;
