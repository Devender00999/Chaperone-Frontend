import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw } from "draft-js";
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

const NewAdmissionBlog = () => {
  useEffect(() => {
    document
      .querySelector('input[type="file"]')
      .setAttribute("accept", "image/x-png,image/jpeg");
    document.querySelector('input[type="file"]').classList.add("form-control");
  });
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [formData, setFormData] = useState({
    heading: "",
    image: "",
    markup: "",
  });

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

    const rawContentState = convertToRaw(editorState.getCurrentContent());

    const markup = draftToHtml(rawContentState);
    setFormData((prev) => ({ ...prev, markup }));
  };

  return (
    <>
      <MainContent direction={"column"} flex={4}>
        <PageHeading style={{ marginBottom: "10px" }}>
          Admission Blogs
        </PageHeading>
        <Form>
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
              <img
                className="mb-3 mt-3"
                src={formData.image}
                alt=""
                style={{
                  width: "100%",
                  height: "300px",
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
          <PrimaryButton className="btn" type="submit">
            Submit
          </PrimaryButton>
        </Form>
        {/* <div dangerouslySetInnerHTML={{ __html: markup }} /> */}
      </MainContent>
      <RightSideBar heading="" content={[]} />
    </>
  );
};

export default NewAdmissionBlog;
