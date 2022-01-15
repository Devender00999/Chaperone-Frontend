import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { EditorState } from "draft-js";
import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  HeaderPreview,
  MainContent,
  PageHeading,
  PrimaryButton,
} from "../../../styledComponents/common/Common/Common.styles";
import StyledEditor from "../../../styledComponents/common/Common/StyledEditor";
import RightSideBar from "../../../styledComponents/SidePanel/RightSideBar";
import { useNavigate, useParams } from "react-router-dom";
import { roadmapsData as data } from "../../../data/roadmapsData";
import htmlToDraft from "html-to-draftjs";

const NewAdmissionBlog = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [roadmapsData, setAdmissionData] = useState(data);

  const [formData, setFormData] = useState({
    heading: "",
    image: "",
    content: "",
  });
  const [editorState, setEditorState] = useState();
  const { id, roadmapId } = params;

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
    if (id && roadmapId) {
      const roadmap = roadmapsData.find((roadmap) => roadmap._id === roadmapId);

      if (roadmap) {
        const article = roadmap.articles.find((article) => article._id === id);

        if (article) {
          setFormData(article);
          console.log(formData);
          const newEditor = convertHTMLToDraft(formData.content);
          setEditorState(newEditor);
        } else {
          // navigate("/not-found");
        }
      } else if (roadmapId === "new") {
        let initialState = {
          heading: "",
          image: "",
          content: "",
          desc: "",
        };

        setFormData(initialState);
      } else {
        // navigate("/not-found");
      }
    }
  }, [params, navigate, formData, roadmapsData, roadmapId, id]);

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === "new") {
      console.log(formData);
    } else {
      const content = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );

      setFormData((prev) => ({ ...prev, content: content }));
      const index = roadmapsData.findIndex((blog) => blog._id === formData._id);
      const newRoadmapsData = [...roadmapsData];
      newRoadmapsData[index] = { ...formData, content: content };
      setAdmissionData(newRoadmapsData);
      navigate("/admin/roadmaps");
    }
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
        <PageHeading style={{ marginBottom: "10px" }}>Roadmaps</PageHeading>
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
                <Form.Label>Technology</Form.Label>
                <br />
                <Form.Select
                  name="categories"
                  type="text"
                  placeholder="Enter Heading"
                  onChange={handleChange}
                >
                  {roadmapsData.map((cat) => {
                    return (
                      <option
                        key={cat._id}
                        selected={cat._id === roadmapId}
                        value={cat._id}
                      >
                        {cat.title}
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
                  value={formData.desc}
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
