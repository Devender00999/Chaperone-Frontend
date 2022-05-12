/** @format */

import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
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
import http from "../../../requests/request";
import port from "../../../port.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Actions from "../../../redux/actions/Action";
import getUserDetails from "../../../requests/decode/decodeToken";

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
    desc: "",
  });
  const [editorState, setEditorState] = useState();
  const { id } = params;

  useEffect(() => {
    document.querySelectorAll("input[type=file]").forEach((item) => {
      item.setAttribute("accept", "image/x-png,image/jpeg");
      item.classList.add("form-control");
    });
  }, []);

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
  }, [params, navigate, formData.content, admissionData, id]);

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    if (id === "new") {
      const newAdmissionData = {
        ...formData,
        content: content,
        author: user.name,
      };
      console.log(newAdmissionData);
      dispatch(Actions.addAdmisArticle(newAdmissionData));

      const res = await http.post(
        "http://localhost:" + port + "/api/admissions/",
        newAdmissionData
      );
      console.log(res);
      toast.success("Article created successfully!!");
    } else {
      setFormData((prev) => ({ ...prev, content: content }));
      const index = admissionData.findIndex(
        (blog) => blog._id === formData._id
      );
      const nAdmissionData = [...admissionData];
      nAdmissionData[index] = { ...formData, content: content };

      const res = await http.put(
        "http://localhost:" + port + "/api/admissions/" + formData._id,
        nAdmissionData[index]
      );
      if (res.message === "Article Modify Successfully") {
        dispatch(Actions.editAdmisArticle(index, nAdmissionData[index]));
        toast.success("Article modified successfully!!");
      } else {
        toast.error(res.message);
      }
    }
    navigate("/admin/admissions");
  };

  const handleChange = (e) => {
    let { type, value, name } = e.target;

    if (type === "file") {
      value = URL.createObjectURL(e.target.files[0]);
      console.log(e);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e) => {
    const file = e.base64;
    setFormData((prev) => ({ ...prev, image: file }));
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
                  name="desc"
                  value={formData.desc}
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
                <FileBase64
                  className="form-control"
                  type="file"
                  name="image"
                  accept="image/x-png,image/gif,image/jpeg"
                  onDone={handleFileChange}
                  placeholder="Enter Title"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
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
