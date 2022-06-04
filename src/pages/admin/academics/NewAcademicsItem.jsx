import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Alert } from "@mui/material";
import {
   MainContent,
   PageHeading,
   OutlinedButton,
} from "../../../styledComponents/common/Common/Common.styles";

import RightSideBar from "../../../styledComponents/SidePanel/RightSideBar";
import getUserDetails from "../../../requests/decode/decodeToken";
import * as academicsActions from "../../../store/academics";
import Loader from "../../../components/Loader/Loader";

const NewAcademicsItem = () => {
   const params = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const user = getUserDetails();

   if (user === null) window.location.href = "/";

   const branches = useSelector((state) => state.academics.branches);
   const semesters = useSelector((state) => state.academics.semesters);

   const selectedSubject = useSelector(
      (state) => state.academics.selectedSubject
   );

   const error = useSelector((state) => state.academics.error);
   const loading = useSelector((state) => state.academics.loading);

   const [formData, setFormData] = useState({
      subName: "",
      teacherId: "",
      semId: "",
      branchId: "",
   });

   const [topicData, setTopicData] = useState({
      topicName: "",
      topicFile: "",
   });
   const { id } = params;

   useEffect(() => {
      dispatch(academicsActions.loadSemesters());
      dispatch(academicsActions.loadBranches());
   }, [dispatch]);

   // To Fill the form if ID is valid
   useEffect(() => {
      if (id && id !== "new") {
         dispatch(academicsActions.loadSubject(id));
      }
   }, [id, dispatch]);

   // updating formData and handling error
   useEffect(() => {
      if (!loading && !error && selectedSubject) {
         setFormData({
            subName: selectedSubject.subName,
            teacherId: selectedSubject.teacher._id,
            semId: selectedSubject.semester._id,
            branchId: selectedSubject.branch._id,
            topics: selectedSubject.topics,
         });
      }

      if (error && id !== "new") {
         if (error.message === "Subject not found") {
            toast.error(error.message);
            navigate("/admin/not-found");
         }
      }
   }, [error, id, loading, navigate, selectedSubject]);

   const handlechange = (e) => {
      let { type, value, name } = e.target;

      if (type === "file") {
         value = e.target.files[0];
         console.log(e);
      }

      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleChangeTopic = (e) => {
      let { type, value, name } = e.target;

      if (type === "file") {
         value = e.target.files[0];
      }

      setTopicData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      let result = "";
      if (id === "new") {
         formData.teacherId = user._id;
         delete formData.topics;
         result = await dispatch(academicsActions.addSubject(formData));
      } else {
         // delete formData["topics"];
         console.log(formData);
         result = await dispatch(academicsActions.updateSubject(id, formData));
      }
      if (result.status === 200) {
         navigate("/admin/academics");
      }
   };

   const handleTopicSubmit = async (topic) => {
      const form = new FormData();
      form.append("topicName", topic.topicName);
      form.append("topicFile", topic.topicFile);

      const { status } = await dispatch(academicsActions.addTopic(id, form));
      if (status === 200) {
         toast.success("Topic Saved Successfully.");
      }
   };

   const handleTopicDelete = async (topicId) => {
      const { status } = await dispatch(
         academicsActions.removeTopic(id, topicId)
      );
      console.log(status);
      if (status === 200) {
         toast.success("Topic Deleted Successfully");
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
               {id === "new" ? "Create a Subject" : "Update a Subject"}
            </PageHeading>
            <div>
               {error && <Alert severity="error">{error.message}</Alert>}
               <Row>
                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group className="mb-2">
                        <Form.Label>Subject Name</Form.Label>
                        <br />
                        <Form.Control
                           name="subName"
                           value={formData.subName}
                           type="text"
                           placeholder="Enter Subject name"
                           onChange={handlechange}
                        />
                     </Form.Group>
                  </Col>
               </Row>
               <Row
                  style={{
                     marginRight: 0,
                     padding: 0,
                     flexDirection: "column",
                     columnGap: "20px",
                  }}
                  className="removeGutter"
               >
                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group
                        className="mb-2 d-flex "
                        style={{ columnGap: "20px" }}
                     >
                        <div style={{ flex: 1 }}>
                           <Form.Label>Semester</Form.Label>
                           <br />
                           <Form.Select
                              name="semId"
                              type="text"
                              placeholder="Enter Heading"
                              value={formData.semId}
                              onChange={handlechange}
                              disabled={id !== "new"}
                           >
                              <option value="">Select a Semester</option>
                              {semesters &&
                                 semesters.map((sem) => (
                                    <option value={sem._id} key={sem._id}>
                                       {sem.name}
                                    </option>
                                 ))}
                           </Form.Select>
                        </div>
                        <div style={{ flex: 1 }}>
                           <Form.Label>Branch</Form.Label>
                           <br />

                           <Form.Select
                              name="branchId"
                              type="text"
                              placeholder="Enter Heading"
                              onChange={handlechange}
                              disabled={id !== "new"}
                           >
                              <option>Select a branch</option>
                              {branches.map((branch) => (
                                 <option value={branch._id} key={branch._id}>
                                    {branch.name}
                                 </option>
                              ))}
                           </Form.Select>
                        </div>
                     </Form.Group>
                  </Col>

                  {id !== "new" && (
                     <>
                        <Col md style={{ paddingRight: 0 }}>
                           <Form.Group className="mb-3">
                              <Form.Label>Topics</Form.Label>
                              {selectedSubject &&
                              selectedSubject.topics.length > 0 ? (
                                 selectedSubject.topics.map((topic) => (
                                    <div
                                       style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          marginTop: "0.5rem",
                                       }}
                                       key={topic._id}
                                    >
                                       <p style={{ margin: 0 }}>
                                          {topic.topicName}
                                       </p>
                                       <OutlinedButton
                                          variant="outlined"
                                          startIcon={<DeleteIcon />}
                                          onClick={() =>
                                             handleTopicDelete(topic._id)
                                          }
                                       >
                                          Delete
                                       </OutlinedButton>
                                    </div>
                                 ))
                              ) : (
                                 <Alert severity="warning">
                                    No Topics Found
                                 </Alert>
                              )}
                           </Form.Group>
                        </Col>
                        <Col md style={{ paddingRight: 0 }}>
                           <Form.Group
                              className="mb-2 d-flex "
                              style={{ columnGap: "20px" }}
                           >
                              <div style={{ flex: 1 }}>
                                 <Form.Label>Topic Name</Form.Label>
                                 <Form.Control
                                    className="form-control"
                                    name="topicName"
                                    type="text"
                                    value={topicData.topicName}
                                    onChange={handleChangeTopic}
                                    placeholder="Enter Topic Name"
                                 />
                                 <br />
                              </div>
                              <div style={{ flex: 1 }}>
                                 <Form.Label>Topic File</Form.Label>
                                 <br />

                                 <Form.Control
                                    className="form-control"
                                    name="topicFile"
                                    type="file"
                                    onChange={handleChangeTopic}
                                    accept="image/x-png,image/gif,image/jpeg"
                                 />
                              </div>
                           </Form.Group>
                        </Col>
                     </>
                  )}
               </Row>

               <Row
                  className="justify-content-between"
                  style={{ padding: "0 12px" }}
               >
                  <OutlinedButton
                     variant="outlined"
                     onClick={handleSubmit}
                     className="btn"
                     sx={{ width: "max-content" }}                     type="submit"
                  >
                     {id !== "new" ? "Save" : "Upload"} Subject
                  </OutlinedButton>
                  {id !== "new" && (
                     <OutlinedButton
                        variant="outlined"
                        sx={{ width: "max-content" }}
                        onClick={() => handleTopicSubmit(topicData)}
                     >
                        Save Topic
                     </OutlinedButton>
                  )}
               </Row>
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: markup }} /> */}
         </MainContent>
         <RightSideBar heading="" content={[]} />
      </>
   );
};

export default NewAcademicsItem;
