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
   HeaderPreview,
} from "../../../styledComponents/common/Common/Common.styles";
import StyledEditor from "../../../styledComponents/common/Common/StyledEditor";
import RightSideBar from "../../../styledComponents/SidePanel/RightSideBar";
import { useNavigate, useParams } from "react-router-dom";
import htmlToDraft from "html-to-draftjs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import getUserDetails from "../../../requests/decode/decodeToken";
import config from "../../../config";
import * as admissionActions from "../../../store/admissions";
import { Alert } from "@mui/material";
import Loader from "../../../components/Loader/Loader";

const NewAdmissionBlog = () => {
   let selectedArticle = useSelector(
      (state) => state.admissions.selectedArticle
   );
   let loading = useSelector((state) => state.admissions.loading);
   const [errorMessage, setErrorMessage] = useState();
   const error = useSelector((state) => state.admissions.error);
   const user = getUserDetails();
   if (user === null) window.location.href = "/";
   const { id } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const [formData, setFormData] = useState({
      heading: "",
      image: "",
      content: "",
      description: "",
   });
   const [editorState, setEditorState] = useState(null);

   const convertHTMLToDraft = (content) => {
      const blocksFromHtml = htmlToDraft(content);
      const contentState = ContentState.createFromBlockArray(
         blocksFromHtml.contentBlocks
      );
      return EditorState.createWithContent(contentState);
   };

   useEffect(() => {
      if (id !== "new") {
         if (!selectedArticle) dispatch(admissionActions.selectArticle(id));
         if (selectedArticle) {
            const newEditor = convertHTMLToDraft(selectedArticle.content);
            setEditorState(newEditor);
            setFormData(selectedArticle);
         }
      }
   }, [dispatch, id, selectedArticle]);

   // if error
   useEffect(() => {
      if (error && !loading) {
         setErrorMessage(error);
         console.log(error);
      }
   }, [error, loading]);

   // Handle Submit
   const handleSubmit = async (e) => {
      e.preventDefault();
      if (editorState === null) {
         setErrorMessage("Article body can't be empty.");
         return;
      }
      const content = draftToHtml(
         convertToRaw(editorState.getCurrentContent())
      );
      const form = new FormData();
      form.append("authorId", user._id);
      form.append("content", content);
      form.append("description", formData.description);
      form.append("heading", formData.heading);
      form.append("image", formData.image);
      let result;
      if (id === "new") {
         result = await dispatch(admissionActions.addArticle(form));
      } else {
         result = await dispatch(
            admissionActions.editArticle(selectedArticle._id, form)
         );
      }
      if (result.status === 200) {
         navigate("/admin/admissions");
      }
   };

   const handleChange = (e) => {
      let { type, value, name } = e.target;

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
      <Loader />
   ) : (
      <>
         <MainContent direction={"column"} flex={4}>
            <PageHeading style={{ marginBottom: "10px" }}>
               Admission Blogs
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
                  {errorMessage && (
                     <Alert severity="error">
                        {errorMessage.message || errorMessage}
                     </Alert>
                  )}
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
                     <Form.Group className="mb-2">
                        <Form.Label>Description</Form.Label>
                        <br />
                        <Form.Control
                           rows="5"
                           name="description"
                           value={formData.description}
                           type="text"
                           as="textarea"
                           placeholder="What is this blog about?"
                           onChange={handleChange}
                           style={{ resize: "none" }}
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
               <Row>
                  <Col>
                     <HeaderPreview
                        image={config.url + formData.image}
                        className="mb-3 mt-3"
                        alt=""
                        style={{
                           display: "none",
                        }}
                     />
                  </Col>
               </Row>
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
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: markup }} /> */}
         </MainContent>
         <RightSideBar heading="" content={[]} />
      </>
   );
};

export default NewAdmissionBlog;
