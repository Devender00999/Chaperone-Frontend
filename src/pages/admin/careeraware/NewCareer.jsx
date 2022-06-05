import React, { useEffect, useState } from "react";

import { Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
   MainContent,
   PageHeading,
   OutlinedButton,
} from "../../../styledComponents/common/Common/Common.styles";

import RightSideBar from "../../../styledComponents/SidePanel/RightSideBar";
import getUserDetails from "../../../requests/decode/decodeToken";
import * as careerAwareActions from "../../../store/careeraware";
import FormTextArea from "../../../components/FormInput/FormTextArea";
import FormTextInput from "../../../components/FormInput/FormTextInput";
import Loader from "../../../components/Loader/Loader";

const initialData = {
   aboutCompany: "",
   companyName: "",
   ctc: "",
   duration: "",
   eligibility: "",
   jobStartDate: "",
   jobType: "",
   lastApplyDate: "",
   link: "",
   logo: "",
   noOfOpenings: 0,
   position: "",
   responsibilities: "",
   requirements: "",
   recruitmentProcess: "",
   skillRequired: "",
   stipend: "",
   workLocation: "",
};

const NewCareer = () => {
   const user = getUserDetails();
   if (user === null) window.location.href = "/";
   const params = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const jobArticle = useSelector((state) => state.careerAware.selectedArticle);
   const loading = useSelector((state) => state.careerAware.loading);
   const error = useSelector((state) => state.careerAware.error);

   const [formData, setFormData] = useState(initialData);
   const { id } = params;

   useEffect(() => {
      if (id && id !== "new") dispatch(careerAwareActions.loadArticle(id));
   }, [dispatch, id]);

   useEffect(() => {
      let article;
      if (id) {
         article = jobArticle;

         console.log(article);
         if (article) {
            setFormData(article);
         }
      }
      if (id === "new") {
         setFormData(initialData);
      }
   }, [params, navigate, jobArticle, id]);

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

   const convertToString = (list) => {
      console.log(list);
      if (list && typeof list !== "string") return list.join(", ");
   };

   const handleChange = ({ target }) => {
      let { type, value, name } = target;

      setFormData((prev) => {
         if (type === "file") {
            value = target.files[0];
         }
         if (
            name === "features" ||
            name === "responsibilities" ||
            name === "recruitmentProcess" ||
            name === "requirements" ||
            name === "eligibility" ||
            name === "skillRequired"
         ) {
            value = value.split(", ");
         }
         return { ...prev, [name]: value };
      });
   };

   const handleSubmit = async (article) => {
      const form = new FormData();

      for (var key in article) {
         form.append(key, article[key]);
      }

      let result;

      if (id === "new") {
         result = await dispatch(careerAwareActions.addArticle(form));
         if (result.status === 200) {
            toast.success("Data Added Successfully");
         }
      } else {
         result = await dispatch(careerAwareActions.updateArticle(id, form));
         if (result.status === 200) {
            toast.success("Data Updated Successfully");
         }
      }

      if (result.status === 200) {
         navigate("/admin/career-aware");
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
            <PageHeading style={{ marginBottom: "10px" }}>
               Career Aware
            </PageHeading>
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
                  <div className="d-flex pe-0" style={{ columnGap: "20px" }}>
                     <div style={{ flex: 1 }}>
                        <FormTextInput
                           label="Company Name"
                           name="companyName"
                           type="text"
                           value={formData.companyName}
                           placeholder="Enter Company Name"
                           onChange={handleChange}
                           required
                        />
                     </div>
                     <div style={{ flex: 1 }}>
                        <FormTextInput
                           label="Position"
                           name="position"
                           type="text"
                           onChange={handleChange}
                           placeholder="Enter role"
                           required
                           value={formData.position}
                        />
                     </div>
                  </div>
                  <div className="d-flex pe-0" style={{ columnGap: "20px" }}>
                     <FormTextInput
                        label="Apply By"
                        name="lastApplyDate"
                        onChange={handleChange}
                        required
                        style={{ flex: 1 }}
                        value={formData.lastApplyDate}
                        type="date"
                     />
                     <FormTextInput
                        label="Stipend"
                        name="stipend"
                        style={{ flex: 1 }}
                        onChange={handleChange}
                        placeholder="Enter stipend/month"
                        type="text"
                        value={formData.stipend}
                     />
                     <FormTextInput
                        label="CTC"
                        name="ctc"
                        onChange={handleChange}
                        placeholder="Enter CTC"
                        style={{ flex: 1 }}
                        type="text"
                        value={formData.ctc}
                     />
                  </div>

                  <FormTextInput
                     label="Upload Logo"
                     type="file"
                     name="logo"
                     onChange={handleChange}
                     accept="image/x-png,image/gif,image/jpeg"
                  />

                  <div className="d-flex" style={{ columnGap: "20px" }}>
                     <FormTextInput
                        label="Number of Openings"
                        style={{ flex: 1 }}
                        name="noOfOpenings"
                        type="number"
                        value={formData.noOfOpenings}
                        placeholder="Enter No. of openings"
                        onChange={handleChange}
                        required
                     />
                     <FormTextInput
                        label="Starts From"
                        name="jobStartDate"
                        type="date"
                        value={formData.jobStartDate}
                        onChange={handleChange}
                        style={{ flex: 1 }}
                        required
                     />
                     <div style={{ flex: 1, margin: "0.5rem 0" }}>
                        <Form.Label>Opportunity</Form.Label>
                        <Form.Select
                           name="jobType"
                           type="text"
                           placeholder="Enter Heading"
                           onChange={handleChange}
                           required
                           value={formData.jobType}
                        >
                           <option value="">Select Job Type</option>
                           <option value="Internship">Internship</option>
                           <option value="Full-Time">Full-Time</option>
                        </Form.Select>
                     </div>
                  </div>

                  <FormTextInput
                     label="Internship Duration"
                     name="duration"
                     type="number"
                     value={formData.duration}
                     placeholder="What is the internship duration(in Months)"
                     onChange={handleChange}
                  />
                  <FormTextArea
                     label="Features"
                     name="features"
                     value={convertToString(formData.features)}
                     placeholder="Exciting Perks"
                     onChange={handleChange}
                  />

                  <FormTextInput
                     label="Application Link"
                     name="link"
                     type="text"
                     value={formData.link}
                     placeholder="Please Enter Application Link"
                     onChange={handleChange}
                  />
                  <FormTextInput
                     label="Address"
                     name="workLocation"
                     type="text"
                     value={formData.workLocation}
                     placeholder="Enter Company's address"
                     onChange={handleChange}
                  />

                  <FormTextArea
                     label="About Company"
                     name="aboutCompany"
                     minRows={2}
                     value={formData.aboutCompany}
                     placeholder="Tell us about Company"
                     onChange={handleChange}
                  />

                  <FormTextArea
                     label="Key Responsibilities"
                     name="responsibilities"
                     minRows={2}
                     value={convertToString(formData.responsibilities)}
                     placeholder="Responsibilities of candidate(Separated by ,)"
                     onChange={handleChange}
                  />
                  <FormTextArea
                     label="Requirements"
                     name="requirements"
                     value={convertToString(formData.requirements)}
                     placeholder="Requirements (Separated by ,)"
                     onChange={handleChange}
                  />
                  <FormTextArea
                     label="Eligibility"
                     name="eligibility"
                     onChange={handleChange}
                     placeholder="Eligibility (Separated by ,)"
                     type="text"
                     value={convertToString(formData.eligibility)}
                  />
                  <FormTextArea
                     label="Skills Required"
                     name="skillRequired"
                     type="text"
                     value={convertToString(formData.skillRequired)}
                     placeholder="Enter skills required for the job (Separated by ,)"
                     onChange={handleChange}
                  />
                  <FormTextArea
                     label="Recruitment Process"
                     name="recruitmentProcess"
                     type="text"
                     placeholder="Enter recuitment process"
                     onChange={handleChange}
                     value={convertToString(formData.recruitmentProcess)}
                  />
               </Row>

               <OutlinedButton
                  variant="outlined"
                  onClick={() => handleSubmit(formData)}
                  className="btn"
                  type="submit"
               >
                  {id === "new" ? "Publish" : "Update"} Article
               </OutlinedButton>
            </div>
         </MainContent>
         <RightSideBar heading="" content={[]} />
      </>
   );
};

export default NewCareer;
