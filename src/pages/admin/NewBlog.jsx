import React, { useState } from "react";

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
} from "../../styledComponents/common/Common/Common.styles";
import StyledEditor from "../../styledComponents/common/Common/StyledEditor";

const NewBlog = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [headerImage, setHeaderImage] = useState();

  const [markup, setMarkup] = useState();

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);

    const rawContentState = convertToRaw(editorState.getCurrentContent());

    const markup = draftToHtml(rawContentState);
    setMarkup(markup);
  };

  const handleImage = (event) => {
    console.log("Change");
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    setHeaderImage(imageUrl);
  };
  console.log(markup);
  return (
    <>
      <MainContent direction={"column"}>
        <PageHeading style={{ marginBottom: "10px" }}>Admissions</PageHeading>
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
                <Form.Control type="email" placeholder="Enter Heading" />
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-3">
                <Form.Label>Upload Header Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={(e) => handleImage(e)}
                  placeholder="Enter Title"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                className="mb-3 mt-3"
                src={headerImage}
                alt=""
                style={{
                  width: "100%",
                  height: "300px",
                  display: headerImage ? "block" : "none",
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
    </>
  );
};

export default NewBlog;
