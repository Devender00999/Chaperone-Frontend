import React, { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { EditorState } from "draft-js";
import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
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

const NewAdmissionBlog = () => {
   let selectedArticle = useSelector(
      (state) => state.admissions.selectedArticle
   );
   let isLoading = useSelector((state) => state.admissions.loading);

   const user = getUserDetails();
   if (user === null) window.location.href = "/";
   const { id } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const init = {
      heading: "",
      image: "",
      content: "",
      description: "",
   };
   const [formData, setFormData] = useState(init);
   const [editorState, setEditorState] = useState();

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

   // Handle Submit
   const handleSubmit = async (e) => {
      e.preventDefault();
      const content = draftToHtml(
         convertToRaw(editorState.getCurrentContent())
      );
      if (id === "new") {
         const newAdmissionData = {
            ...formData,
            content: content,
            authorId: user._id,
         };
         const form = new FormData();
         form.append("authorId", newAdmissionData.authorId);
         form.append("content", newAdmissionData.content);
         form.append("description", newAdmissionData.description);
         form.append("heading", newAdmissionData.heading);
         form.append("image", newAdmissionData.image);
         toast.success("Article Created Successfully!");
         newAdmissionData.author = {
            name: user.name,
            _id: user._id,
            profilePic: user.profilePic,
         };
         dispatch(admissionActions.addArticle(form));
         // }
      } else {
         setFormData((prev) => ({ ...prev, content: content }));
         console.log(content);
         selectedArticle = { ...selectedArticle, content };
         const form = new FormData();
         form.append("heading", formData.heading);
         form.append("description", formData.description);
         form.append("content", content);
         form.append("image", formData.image);
         dispatch(admissionActions.editArticle(selectedArticle._id, form));
         toast.success("Article modified successfully!!");
      }
      navigate("/admin/admissions");
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

   return isLoading === true ? (
      "Loading..."
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
