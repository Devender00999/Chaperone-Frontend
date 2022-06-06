import React, { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import {
   MainContent,
   PageHeading,
   PrimaryButton,
} from "../../../styledComponents/common/Common/Common.styles";
import RightSideBar from "../../../styledComponents/SidePanel/RightSideBar";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import * as roadmapActions from "../../../store/roadmaps";
import InputTags from "../../../styledComponents/InputTags";
import Loader from "../../../components/Loader/Loader";
import { Alert } from "@mui/material";
import getUserDetails from "../../../requests/decode/decodeToken";

const NewProject = () => {
   const selectedProject = useSelector(
      (state) => state.roadmaps.selectedProject
   );
   const roadmaps = useSelector((state) => state.roadmaps.allRoadmaps);
   const loading = useSelector((state) => state.roadmaps.loading);
   const error = useSelector((state) => state.roadmaps.error);
   const dispatch = useDispatch();
   //List Tags Component
   const [techUsed, setTechUsed] = useState([]);
   const [errorMessage, setErrorMessage] = useState("");

   const navigate = useNavigate();

   const [formData, setFormData] = useState({
      heading: "",
      image: "",
      description: "",
      githubLink: "",
      link: "",
      categoryId: "",
   });

   const { roadmapId, projectId, newProject } = useParams();

   useEffect(() => {
      if (newProject !== "newProject") {
         if (!selectedProject) {
            dispatch(roadmapActions.selectProject(roadmapId, projectId));
         }
         if (selectedProject) {
            setFormData({ ...selectedProject, categoryId: roadmapId });
            setTechUsed([...selectedProject.techUsed]);
         }
      }
   }, [navigate, dispatch, roadmapId, projectId, selectedProject, newProject]);

   useEffect(() => {
      if (error != null && !loading) {
         setErrorMessage(error);
      }
      if (roadmaps.length === 0) {
         dispatch(roadmapActions.loadRoadmaps());
      }
   }, [error, loading, dispatch, roadmaps]);
   const handleChange = ({ target }) => {
      let { type, value, name } = target;

      setFormData((prev) => {
         if (type === "file") {
            value = target.files[0];
         }
         return { ...prev, [name]: value };
      });
   };

   const handleSubmit = async (e) => {
      const user = getUserDetails();
      e.preventDefault();
      console.log(formData.categoryId);

      const form = new FormData();
      form.append("heading", formData.heading);
      form.append("image", formData.image);
      form.append("description", formData.description);
      form.append("githubLink", formData.githubLink);
      form.append("link", formData.link);
      form.append("authorId", user._id);
      form.append("techUsed", techUsed);
      let result;
      console.log(newProject);
      if (newProject === "newProject") {
         result = await dispatch(
            roadmapActions.addProject(formData.categoryId, form)
         );
      } else {
         result = await dispatch(
            roadmapActions.editProject(roadmapId, projectId, form)
         );
      }

      if (result.status === 200) {
         navigate("/admin/projects");
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
               Post Project
            </PageHeading>
            <div>
               {errorMessage && (
                  <Alert severity="error">{errorMessage.message}</Alert>
               )}
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
                     <Form.Group className="mb-2">
                        <Form.Label>Technology</Form.Label>
                        <Form.Select
                           name="categoryId"
                           type="text"
                           placeholder="Enter Heading"
                           onChange={handleChange}
                           disabled={roadmapId}
                           value={roadmapId}
                           required
                        >
                           <option value={null}>Select a category</option>
                           {roadmaps.map((category) => {
                              return (
                                 <option
                                    key={category._id}
                                    value={category._id}
                                 >
                                    {category.title}
                                 </option>
                              );
                           })}
                        </Form.Select>
                     </Form.Group>
                  </Col>
                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group className="mb-2">
                        <Form.Label>Title</Form.Label>
                        <br />
                        <Form.Control
                           name="heading"
                           value={formData.heading}
                           type="text"
                           placeholder="Enter project title"
                           onChange={handleChange}
                        />
                     </Form.Group>
                  </Col>

                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group className="mb-3">
                        <Form.Label>Upload Header Image</Form.Label>
                        <Form.Control
                           className="form-control"
                           type="file"
                           name="image"
                           accept="image/x-png,image/gif,image/jpeg"
                           onChange={handleChange}
                        />
                     </Form.Group>
                  </Col>
                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group className="mb-2">
                        <Form.Label>Description</Form.Label>
                        <br />
                        <Form.Control
                           as="textarea"
                           rows={3}
                           name="description"
                           style={{ resize: "none" }}
                           value={formData.description}
                           type="text"
                           placeholder="what did you created?"
                           onChange={handleChange}
                        />
                     </Form.Group>
                  </Col>
                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group className="mb-2">
                        <Form.Label>Technology</Form.Label>

                        <InputTags tags={techUsed} setTags={setTechUsed} />
                     </Form.Group>
                  </Col>
                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group className="mb-2">
                        <Form.Label>Githup Link</Form.Label>
                        <br />
                        <Form.Control
                           name="githubLink"
                           value={formData.githubLink}
                           type="text"
                           placeholder="Enter github link(optional)"
                           onChange={handleChange}
                        />
                     </Form.Group>
                  </Col>
                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group className="mb-2">
                        <Form.Label>Project Link</Form.Label>
                        <br />
                        <Form.Control
                           name="link"
                           value={formData.link}
                           type="text"
                           placeholder="Enter project live url(optional)"
                           onChange={handleChange}
                        />
                     </Form.Group>
                  </Col>
               </Row>

               <PrimaryButton
                  onClick={handleSubmit}
                  className="btn"
                  type="submit"
               >
                  Submit
               </PrimaryButton>
            </div>
         </MainContent>
         <RightSideBar />
      </>
   );
};

export default NewProject;
