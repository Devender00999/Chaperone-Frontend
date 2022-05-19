/** @format */

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
// import { admissionData as data } from "../../../data/admissionData";
import htmlToDraft from "html-to-draftjs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Actions from "../../../redux/actions/Action";
import getUserDetails from "../../../requests/decode/decodeToken";
import config from "../../../config";
import http from "../../../services/httpService";

const NewAdmissionBlog = () => {
  const user = getUserDetails();
  if (user === null) window.location.href = "/";
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admissionData = useSelector((state) => state.allAdArticles);
  const [formData, setFormData] = useState({
    heading: "",
    image: "",
    content: "",
    description: "",
  });
  const [editorState, setEditorState] = useState();
  const { id } = params;

  const convertHTMLToDraft = (content) => {
    const blocksFromHtml = htmlToDraft(content);
    const contentState = ContentState.createFromBlockArray(
      blocksFromHtml.contentBlocks
    );
    return EditorState.createWithContent(contentState);
  };

  //Setting editor state if blog is being edited
  useEffect(() => {
    let article;
    if (id) {
      article = admissionData.find((blog) => blog._id === id);
      if (article) {
        setFormData(article);
        const newEditor = convertHTMLToDraft(formData.content);
        setEditorState(newEditor);
      } else if (id === "new") {
        let initialState = {
          heading: "",
          image: "",
          content: "",
          desc: "",
        };
        setFormData(initialState);
      } else {
        navigate("/not-found");
      }
    }
  }, [navigate, formData.content, admissionData, id]);

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    if (id === "new") {
      const newAdmissionData = {
        ...formData,
        content: content,
        authorId: user._id,
      };
      const form = new FormData();
      form.append("authorId", newAdmissionData.authorId);
      form.append("content", newAdmissionData.content);
      console.log(newAdmissionData.content);
      form.append("description", newAdmissionData.description);
      form.append("heading", newAdmissionData.heading);
      form.append("image", newAdmissionData.image);
      try {
        const { data } = await http.post(config.apiUrl + "/admissions/", form);
        if (data) {
          toast.success("Article Created Successfully!");
          newAdmissionData.author = {
            name: user.name,
            _id: user._id,
            profilePic: user.profilePic,
          };
          dispatch(Actions.addAdmisArticle(newAdmissionData));
        }
      } catch (ex) {
        toast.error(ex.response.data.message);
        console.log(ex.response.data.message);
      }
    } else {
      setFormData((prev) => ({ ...prev, content: content }));
      const index = admissionData.findIndex(
        (blog) => blog._id === formData._id
      );
      formData.content = content;
      const nAdmissionData = [...admissionData];
      nAdmissionData[index] = { ...formData, content: content };
      const form = new FormData();
      form.append("heading", nAdmissionData[index].heading);
      form.append("description", nAdmissionData[index].description);
      form.append("content", nAdmissionData[index].content);
      form.append("image", nAdmissionData[index].image);
      try {
        const { data } = await http.patch(
          config.apiUrl + "/admissions/" + formData._id,
          form
        );
        console.log(data);
        dispatch(Actions.editAdmisArticle(index, data));
        toast.success("Article modified successfully!!");
      } catch (ex) {
        toast.error(ex.response.data);
        console.log(ex.response.data.message);
      }
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

  return (
    <>
      <MainContent direction={"column"} flex={4}>
        <PageHeading style={{ marginBottom: "10px" }}>
          Admission Blogs
        </PageHeading>
        <Form onSubmit={handleSubmit}>
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
                  accept="image/x-png,image/jpg,image/jpeg"
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
          <PrimaryButton onClick={handleSubmit} className="btn" type="submit">
            {id !== "new" ? "Save" : "Submit"}
          </PrimaryButton>
        </Form>
        {/* <div dangerouslySetInnerHTML={{ __html: markup }} /> */}
      </MainContent>
      <RightSideBar heading="" content={[]} />
    </>
  );
};

export default NewAdmissionBlog;
