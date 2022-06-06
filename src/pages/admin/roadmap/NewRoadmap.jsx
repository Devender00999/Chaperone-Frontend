import React, { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { EditorState } from "draft-js";
import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
   MainContent,
   PageHeading,
   PrimaryButton,
} from "../../../styledComponents/common/Common/Common.styles";
import StyledEditor from "../../../styledComponents/common/Common/StyledEditor";
import RightSideBar from "../../../styledComponents/SidePanel/RightSideBar";
import { useNavigate, useParams } from "react-router-dom";
import htmlToDraft from "html-to-draftjs";
import { useDispatch, useSelector } from "react-redux";
import * as roadmapActions from "../../../store/roadmaps";
import getUserDetails from "../../../requests/decode/decodeToken";
import { Alert } from "@mui/material";

const NewAdmissionBlog = () => {
   const params = useParams();
   const navigate = useNavigate();
   const selectedArticle = useSelector(
      (state) => state.roadmaps.selectedArticle
   );
   const roadmaps = useSelector((state) => state.roadmaps.allRoadmaps);
   const [errorMessage, setErrorMessage] = useState();
   const error = useSelector((state) => state.roadmaps.error);
   const loading = useSelector((state) => state.roadmaps.loading);

   const { id, roadmapId, new: newArticle } = params;

   const [isApiCalled, setIsApiCalled] = useState(false);

   const [formData, setFormData] = useState({
      categoryId: "",
      heading: "",
      image: "",
      content: "",
      description: "",
   });
   const [editorState, setEditorState] = useState(null);
   const dispatch = useDispatch();

   const convertHTMLToDraft = (content) => {
      const blocksFromHtml = htmlToDraft(content || "");
      const contentState = ContentState.createFromBlockArray(
         blocksFromHtml.contentBlocks
      );
      return EditorState.createWithContent(contentState);
   };

   //Setting editor state if blog is being edited
   useEffect(() => {
      if (newArticle !== "new") {
         if (!selectedArticle)
            dispatch(roadmapActions.selectArticle(roadmapId, id));
         if (selectedArticle) {
            const newEditor = convertHTMLToDraft(selectedArticle.content);
            setEditorState(newEditor);

            setFormData({ ...selectedArticle, categoryId: roadmapId });
         }
      }
   }, [dispatch, id, selectedArticle, newArticle, roadmapId]);

   useEffect(() => {
      if (roadmaps.length === 0 && !isApiCalled) {
         dispatch(roadmapActions.loadRoadmaps());
         setIsApiCalled(true);
      }
      if (!loading && error) {
         setErrorMessage(error);
      }
   }, [roadmaps, isApiCalled, dispatch, error, loading]);

   // Handle Submit
   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(editorState);
      if (!formData.categoryId) {
         setErrorMessage("Please select a category");
         return;
      }
      if (editorState === null) {
         setErrorMessage("Body can't be empty");
         return;
      }
      const user = getUserDetails();
      const content = draftToHtml(
         convertToRaw(editorState.getCurrentContent())
      );
      const form = new FormData();
      form.append("authorId", user._id);
      form.append("heading", formData.heading);
      form.append("content", content);
      form.append("image", formData.image);
      form.append("description", formData.description);
      console.log(id);
      console.log(formData);
      let result;
      if (newArticle === "new") {
         result = await dispatch(
            roadmapActions.addArticle(formData.categoryId, form)
         );
      } else {
         result = await dispatch(
            roadmapActions.editArticle(roadmapId, id, form)
         );
      }
      if (result.status === 200) {
         navigate("/admin/roadmaps");
      }
   };

   const handleChange = (e) => {
      let { type, value, name } = e.target;
      console.log(name, value);
      setFormData((prevValue) => {
         if (type === "file") {
            let image = e.target.files[0];
            return { ...prevValue, [name]: image };
         } else return { ...prevValue, [name]: value };
      });
   };

   const onEditorStateChange = (editorState) => {
      setEditorState(editorState);
   };

   return loading ? (
      "Loading..."
   ) : (
      <>
         <MainContent direction={"column"} flex={4}>
            <PageHeading style={{ marginBottom: "10px" }}>Roadmaps</PageHeading>
            <Form onSubmit={handleSubmit}>
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
                        <Form.Label>Heading</Form.Label>
                        <br />
                        <Form.Control
                           name="heading"
                           value={formData.heading}
                           type="text"
                           placeholder="Enter Heading"
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
                           accept="image/x-png,image/jpg,image/jpeg, image/svg"
                           onChange={handleChange}
                        />
                     </Form.Group>
                  </Col>
               </Row>
               {/* <Row>
                  <Col>
                     <HeaderPreview
                        image={formData.image}
                        className="mb-3 mt-3"
                        alt=""
                        style={{
                           display: formData.image ? "block" : "none",
                        }}
                     />
                  </Col>
               </Row> */}
               <Form.Label>Body</Form.Label>

               <div
                  style={{
                     border: "1px solid #D2D2D2",
                     marginBottom: "20px",
                     borderRadius: "5px",
                  }}
               >
                  <StyledEditor
                     editorState={editorState}
                     onEditorStateChange={onEditorStateChange}
                  />
               </div>
               <PrimaryButton
                  onClick={handleSubmit}
                  className="btn"
                  type="submit"
               >
                  {id !== "new" ? "Save" : "Submit"}
               </PrimaryButton>
            </Form>
            {/* <div dangerouslySetInnerHTML={{ __html: markup }} /> */}
         </MainContent>
         <RightSideBar />
      </>
   );
};

export default NewAdmissionBlog;
