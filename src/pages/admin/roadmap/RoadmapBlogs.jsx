import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../../../styledComponents/common/Table/DataTable";
import {
   PageHeading,
   HeadingContainer,
   HeadingContent,
   MainContent,
   PrimaryButton,
   Heading,
} from "../../../styledComponents/common/Common/Common.styles";

import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import * as roadmapActions from "../../../store/roadmaps";
import Loader from "../../../components/Loader/Loader";
import { Col, Form, Row } from "react-bootstrap";
import InputTags from "../../../styledComponents/InputTags";

const RoadmapBlogs = () => {
   // const [roadmaps, setRoadmaps] = useState(roadmapsData);
   const [errorMessage, setErrorMessage] = useState();
   const [newRoadmap, setNewRoadmap] = useState("none");
   const [formData, setFormData] = useState({
      title: "",
      icon: "",
   });
   const [features, setFeatures] = useState([
      "Roadmaps",
      "Projects",
      "Latest Trends",
   ]);

   const dispatch = useDispatch();
   const navigator = useNavigate();

   const roadmaps = useSelector((state) => state.roadmaps.allRoadmaps);
   const error = useSelector((state) => state.roadmaps.error);
   const loading = useSelector((state) => state.roadmaps.loading);

   const [isApiCalled, setIsApiCalled] = useState(false);

   const handleEdit = (id, roadmapId) => {
      dispatch(roadmapActions.selectArticle(roadmapId, id));
      navigator(`${roadmapId}/${id}`);
   };

   const handleDelete = (id, roadmapId) => {
      dispatch(roadmapActions.removeArticle(roadmapId, id));
   };

   useEffect(() => {
      if (error != null) {
         setErrorMessage(error);
         dispatch(roadmapActions.cleanError());
      }
      if (roadmaps.length === 0 && !isApiCalled) {
         dispatch(roadmapActions.loadRoadmaps());
         setIsApiCalled(true);
      }
   }, [dispatch, error, isApiCalled, roadmaps]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const roadmap = new FormData();
      roadmap.append("title", formData.title);
      roadmap.append("icon", formData.icon);
      roadmap.append("features", features);
      const response = await dispatch(roadmapActions.addRoadmap(roadmap));
      if (response.status === 200) {
         setNewRoadmap("none");
      }
   };

   const handleChange = ({ target }) => {
      let { name, value, type } = target;
      setFormData((prevState) => {
         if (type === "file") {
            value = target.files[0];
         }
         return {
            ...prevState,
            [name]: value,
         };
      });
   };

   return loading ? (
      <Loader />
   ) : (
      <>
         <MainContent direction={"column"} flex={"auto"}>
            <HeadingContainer>
               <PageHeading>Edit Your Roadmap Blogs</PageHeading>
               <HeadingContent>
                  <Link
                     style={{ textDecoration: "none", color: "White" }}
                     to="/admin/roadmaps/new"
                  >
                     <PrimaryButton className="primaryButton">
                        Add New Article
                     </PrimaryButton>
                  </Link>
                  <PrimaryButton
                     className="primaryButton"
                     onClick={() => setNewRoadmap("block")}
                  >
                     Add New Category
                  </PrimaryButton>
               </HeadingContent>
            </HeadingContainer>
            <div style={{ display: newRoadmap }}>
               <h5>Create a new roadmap.</h5>
               {errorMessage && (
                  <Alert severity="error">
                     {errorMessage.message || errorMessage}
                  </Alert>
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
                        <Form.Label>Title</Form.Label>
                        <br />
                        <Form.Control
                           name="title"
                           value={formData.title}
                           type="text"
                           placeholder="Enter Title"
                           onChange={handleChange}
                        />
                     </Form.Group>
                  </Col>
                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group className="mb-3">
                        <Form.Label>Upload Roadmap Icon</Form.Label>
                        <Form.Control
                           className="form-control"
                           type="file"
                           name="icon"
                           accept="image/x-png,image/jpg,image/jpeg,image/svg"
                           onChange={handleChange}
                        />
                     </Form.Group>
                  </Col>
                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group className="mb-3">
                        <Form.Label>Add Tags</Form.Label>
                        <InputTags tags={features} setTags={setFeatures} />
                     </Form.Group>
                  </Col>
               </Row>

               <PrimaryButton
                  onClick={handleSubmit}
                  className="btn"
                  type="submit"
               >
                  {"id" !== "new" ? "Save" : "Submit"}
               </PrimaryButton>
            </div>

            {roadmaps.map((roadmap) => (
               <div key={roadmap._id}>
                  <Heading
                     style={{
                        padding: 0,
                        paddingBottom: "5px",
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                        margin: "2rem 0 0",
                        marginTop: "1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#f60",
                     }}
                  >
                     {roadmap.title}
                     <ClearOutlinedIcon
                        onClick={() =>
                           dispatch(roadmapActions.removeRoadmap(roadmap._id))
                        }
                        style={{ cursor: "pointer" }}
                        color="#f60"
                     />
                  </Heading>
                  <DataTable
                     key={roadmap._id}
                     id={roadmap._id}
                     data={roadmap.articles}
                     onEdit={handleEdit}
                     onDelete={handleDelete}
                  />
               </div>
            ))}
            <Link
               style={{
                  textDecoration: "none",
                  color: "White",
                  marginTop: "30px",
               }}
               to="/admin/roadmaps/new"
            ></Link>
         </MainContent>
      </>
   );
};

export default RoadmapBlogs;
