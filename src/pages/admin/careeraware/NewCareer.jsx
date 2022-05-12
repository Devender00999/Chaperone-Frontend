/** @format */

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
import { toast } from "react-toastify";
import http from "../../../requests/request";
import port from "../../../port.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Actions from "../../../redux/actions/Action";
import { useNavigate, useParams } from "react-router-dom";
import getUserDetails from "../../../requests/decode/decodeToken";

const NewCareer = () => {
  const user = getUserDetails();
  if (user === null) window.location.href = "/";
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const academicData = useSelector((state) => state.careerArticles);
  useEffect(() => {
    document.querySelectorAll("input[type=file]").forEach((item) => {
      item.setAttribute("accept", "image/x-png,image/jpeg");
      item.classList.add("form-control");
    });
  }, []);

  const [formData, setFormData] = useState({
    position: "",
    companyName: "",
    workLocation: "",
    lastApplyDate: "",
    jobType: "Internship",
    logo: "",
    stipend: "",
    ctc: "",
    jobStartDate: "",
    aboutCompany: ``,
    keyResponsibility: "",
    requirement: "",
    eligibility: "",
    recruitmentProcess: "",
    skillRequired: "",
    numOfOpening: "",
  });
  const { id } = params;

  const handleChange = (e) => {
    let { type, value, name } = e.target;

    if (type === "file") {
      value = URL.createObjectURL(e.target.files[0]);
    }
    console.log(typeof e.target.value);

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    let article;
    if (id) {
      article = academicData.find((blog) => blog._id === id);
      if (article) {
        setFormData(article);
      } else if (id === "new") {
        let initialState = {
          position: "",
          companyName: "",
          workLocation: "",
          lastApplyDate: "",
          jobType: "Internship",
          logo: "",
          stipend: "",
          ctc: "",
          jobStartDate: "",
          aboutCompany: ``,
          keyResponsibility: "",
          requirement: "",
          eligibility: "",
          recruitmentProcess: "",
          skillRequired: "",
          numOfOpening: "",
        };

        setFormData(initialState);
      } else {
        navigate("/not-found");
      }
    }
  }, [params, navigate, formData.content, academicData, id]);

  const handleFileChange = (e) => {
    const file = e.base64;
    setFormData((prev) => ({ ...prev, logo: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.keyResponsibility.includes("\n")) {
      formData.keyResponsibility = formData.keyResponsibility.split("\n");
    }
    if (formData.requirement.includes("\n")) {
      formData.requirement = formData.requirement.split("\n");
    }
    if (formData.skillRequired.includes("\n")) {
      formData.skillRequired = formData.skillRequired.split("\n");
    }
    if (formData.recruitmentProcess.includes("\n")) {
      formData.recruitmentProcess = formData.recruitmentProcess.split("\n");
    }
    if (id === "new") {
      const newAcademicData = { ...formData, author: user.name };
      console.log(newAcademicData);

      const res = await http.post(
        "http://localhost:" + port + "/api/career/",
        newAcademicData
      );
      if (res.message === "Job Created Successfully") {
        dispatch(Actions.addCareerArticle(newAcademicData));
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } else {
      const index = academicData.findIndex((blog) => blog._id === formData._id);
      const nAcademicData = [...academicData];
      nAcademicData[index] = { ...formData };

      const res = await http.put(
        "http://localhost:" + port + "/api/career/" + formData._id,
        nAcademicData[index]
      );
      if (res.message === "Job Modify Successfully") {
        dispatch(Actions.editCareerArticle(index, nAcademicData[index]));
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    }
    navigate("/admin/career-aware");
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
                  name="lastApplyDate"
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
                  name="logo"
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
                    name="numOfOpening"
                    type="number"
                    value={formData.numOfOpening}
                    placeholder="Enter No. of openings"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <Form.Label>Starts From</Form.Label>
                  <br />

                  <Form.Control
                    name="jobStartDate"
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
                    name="jobType"
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
                  name="workLocation"
                  type="text"
                  value={formData.workLocation}
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
                  name="aboutCompany"
                  type="text"
                  value={formData.aboutCompany}
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
                  name="keyResponsibility"
                  type="text"
                  value={formData.keyResponsibility}
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
                  name="requirement"
                  type="text"
                  value={formData.requirement}
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
                  name="eligibility"
                  type="text"
                  value={formData.eligibility}
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
                  name="skillRequired"
                  type="text"
                  value={formData.skillRequired}
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
