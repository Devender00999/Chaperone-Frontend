import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  MainContent,
  PageHeading,
  PrimaryButton,
} from "../../../styledComponents/common/Common/Common.styles";
import RightSideBar from "../../../styledComponents/SidePanel/RightSideBar";

const NewAcademicsItem = () => {
  useEffect(() => {
    document
      .querySelector('input[type="file"]')
      .setAttribute("accept", "application/pdf");
    document.querySelector('input[type="file"]').classList.add("form-control");
  });

  const [formData, setFormData] = useState({
    heading: "",
    image: "",
    markup: "",
    categories: "Cloud Computing",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const roadmapCategories = [
    "Cloud Computing",
    "Web Technology",
    "Machine Learning",
    "Data Science",
    "UX Desinging",
    "Blockchain",
  ];
  return (
    <>
      <MainContent
        direction={"column"}
        flex={4}
        style={{ paddingBottom: "10px" }}
      >
        <PageHeading style={{ marginBottom: "10px" }}>Upload Notes</PageHeading>
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
              <Form.Group
                className="mb-2 d-flex "
                style={{ columnGap: "20px" }}
              >
                <div style={{ flex: 1 }}>
                  <Form.Label>Semester</Form.Label>
                  <br />
                  <Form.Select
                    name="semester"
                    type="text"
                    placeholder="Enter Heading"
                    onChange={handleChange}
                  >
                    {roadmapCategories.map((cat) => (
                      <option value={cat}>{cat}</option>
                    ))}
                  </Form.Select>
                </div>
                <div style={{ flex: 1 }}>
                  <Form.Label>Branch</Form.Label>
                  <br />

                  <Form.Select
                    name="branch"
                    type="text"
                    placeholder="Enter Heading"
                    onChange={handleChange}
                  >
                    {roadmapCategories.map((cat) => (
                      <option value={cat}>{cat}</option>
                    ))}
                  </Form.Select>
                </div>
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2">
                <Form.Label>Subject</Form.Label>
                <br />
                <Form.Select
                  name="categories"
                  type="text"
                  placeholder="Enter Heading"
                  onChange={handleChange}
                >
                  {roadmapCategories.map((cat) => (
                    <option value={cat}>{cat}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-3">
                <Form.Label>Upload File</Form.Label>
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

          <Col md style={{ paddingRight: 0 }}>
            <Form.Group className="mb-2">
              <Form.Label>Teacher</Form.Label>
              <br />
              <Form.Control
                name="heading"
                value={formData.heading}
                type="text"
                placeholder="Enter name of teacher"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <PrimaryButton onClick={handleSubmit} className="btn" type="submit">
            Upload Note
          </PrimaryButton>
        </Form>
        {/* <div dangerouslySetInnerHTML={{ __html: markup }} /> */}
      </MainContent>
      <RightSideBar heading="" content={[]} />
    </>
  );
};

export default NewAcademicsItem;
