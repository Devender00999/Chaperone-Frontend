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

const NewCareer = () => {
  useEffect(() => {
    document.querySelectorAll("input[type=file]").forEach((item) => {
      item.setAttribute("accept", "image/x-png,image/jpeg");
      item.classList.add("form-control");
    });
  }, []);

  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    applyBy: "",
    stipend: "0",
    ctc: "",
    companyLogo: "",
    noOfOpening: "",
    type: "Internship",
    companyAddress: "",
    startDate: "",
    duration: "",
    description: ``,
    responsibilities: "",
    requirements: "",
    eligibilityBatch: "",
    skillsRequired: "",
    recruitmentProcess: "",
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
    if (formData.responsibilities.includes("\n")) {
      formData.responsibilities = formData.responsibilities.split("\n");
    }
    if (formData.requirements.includes("\n")) {
      formData.requirements = formData.requirements.split("\n");
    }
    if (formData.skillsRequired.includes("\n")) {
      formData.skillsRequired = formData.skillsRequired.split("\n");
    }
    if (formData.recruitmentProcess.includes("\n")) {
      formData.recruitmentProcess = formData.recruitmentProcess.split("\n");
    }
    console.log(formData);
  };

  return (
    <>
      <MainContent
        direction={"column"}
        flex={4}
        style={{ paddingBottom: "10px" }}
      >
        <PageHeading style={{ marginBottom: "10px" }}>Career Aware</PageHeading>
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
            <Form.Group
              className="mb-2 d-flex pe-0"
              style={{ columnGap: "20px" }}
            >
              <div style={{ flex: 1 }}>
                <Form.Label>Company Name</Form.Label>
                <br />
                <Form.Control
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  placeholder="Enter Company Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <Form.Label>Position</Form.Label>
                <br />

                <Form.Control
                  name="position"
                  type="text"
                  placeholder="Enter role"
                  onChange={handleChange}
                  value={formData.position}
                  required
                ></Form.Control>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-2 d-flex pe-0"
              style={{ columnGap: "20px" }}
            >
              <div style={{ flex: 1 }}>
                <Form.Label>Apply By</Form.Label>
                <br />
                <Form.Control
                  name="applyBy"
                  type="date"
                  placeholder="Enter last date"
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <Form.Label>Stipend</Form.Label>
                <br />

                <Form.Control
                  name="stipend"
                  type="text"
                  value={formData.stipend}
                  placeholder="Enter stipend/month"
                  onChange={handleChange}
                ></Form.Control>
              </div>
              <div style={{ flex: 1 }}>
                <Form.Label>CTC</Form.Label>
                <br />
                <Form.Control
                  name="ctc"
                  type="text"
                  value={formData.ctc}
                  placeholder="Enter CTC"
                  onChange={handleChange}
                ></Form.Control>
              </div>
            </Form.Group>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-3">
                <Form.Label>Upload Logo</Form.Label>
                <FileBase64
                  className="form-control"
                  type="file"
                  name="companyLogo"
                  accept="image/x-png,image/gif,image/jpeg"
                  onDone={handleFileChange}
                />
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2 d-flex" style={{ columnGap: "20px" }}>
                <div style={{ flex: 1 }}>
                  <Form.Label>Number of Openings </Form.Label>
                  <br />

                  <Form.Control
                    name="noOfOpening"
                    type="number"
                    value={formData.noOfOpening}
                    placeholder="Enter No. of openings"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <Form.Label>Starts From</Form.Label>
                  <br />

                  <Form.Control
                    name="startDate"
                    type="date"
                    placeholder="Enter Heading"
                    onChange={handleChange}
                    required
                  ></Form.Control>
                </div>
                <div style={{ flex: 1 }}>
                  <Form.Label>Oppotunity</Form.Label>
                  <br />
                  <Form.Select
                    name="type"
                    type="text"
                    placeholder="Enter Heading"
                    onChange={handleChange}
                    required
                  >
                    <option value="Internship">Internship</option>

                    <option value="Job">Job</option>
                  </Form.Select>
                </div>
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group>
                <Form.Label> Address</Form.Label>
                <br />

                <Form.Control
                  className="mb-2 d-flex pe-0"
                  name="companyAddress"
                  type="text"
                  value={formData.companyAddress}
                  placeholder="Enter Company's address"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
            </Col>

            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2 pe-0">
                <Form.Label> About Company</Form.Label>
                <br />
                <Form.Control
                  as={"textarea"}
                  name="description"
                  type="text"
                  value={formData.description}
                  placeholder="About the company"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2 pe-0">
                <Form.Label> Key Responsibilities</Form.Label>
                <br />
                <Form.Control
                  as={"textarea"}
                  rows={6}
                  name="responsibilities"
                  type="text"
                  value={formData.responsibilities}
                  placeholder="Responsibilities of candidate"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2 pe-0">
                <Form.Label>Requirements</Form.Label>
                <br />
                <Form.Control
                  as={"textarea"}
                  rows={6}
                  name="requirements"
                  type="text"
                  value={formData.requirements}
                  placeholder="Requirements"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2 pe-0">
                <Form.Label>Eligibility</Form.Label>
                <br />
                <Form.Control
                  as={"textarea"}
                  rows={4}
                  name="eligibilityBatch"
                  type="text"
                  value={formData.eligibilityBatch}
                  placeholder="Eligibility"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2 pe-0">
                <Form.Label>Skills Required</Form.Label>
                <br />
                <Form.Control
                  as={"textarea"}
                  rows={4}
                  name="skillsRequired"
                  type="text"
                  value={formData.skillsRequired}
                  placeholder="Enter skills required for the job"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2 pe-0">
                <Form.Label>Recruitment Process</Form.Label>
                <br />
                <Form.Control
                  as={"textarea"}
                  rows={4}
                  value={formData.recruitmentProcess}
                  name="recruitmentProcess"
                  type="text"
                  placeholder="Enter recuitment process"
                  onChange={handleChange}
                ></Form.Control>
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
                  width: "40px",
                  height: "40px",
                  display: formData.image ? "block" : "none",
                }}
              />
            </Col>
          </Row>

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

export default NewCareer;
