import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import {
  MainContent,
  PageHeading,
  PrimaryButton,
} from "../../../styledComponents/common/Common/Common.styles";
import RightSideBar from "../../../styledComponents/SidePanel/RightSideBar";
import { useParams } from "react-router-dom";
import { roadmapsData } from "../../../data/roadmapsData";
import {
  DoubtInputTag,
  DoubtInputTags,
  InputDelete,
  InputTags,
} from "../../../styledComponents/styledPages/DoubtDeskPage/DoubtDeskPage.styles";

const NewProject = () => {
  //List Tags Component
  const [questionData, setQuestionData] = useState({
    question: "",
    questionTags: [],
  });

  const handleAdd = (e) => {
    if (e.keyCode === 13) {
      const data = e.target.value;
      setQuestionData((prevState) => ({
        ...prevState,
        questionTags: [...prevState.questionTags, data],
      }));
      e.target.value = "";
    }
  };
  const handleBack = (e) => {
    if (e.keyCode === 8 && e.target.value === "") {
      setQuestionData((prevState) => ({
        ...prevState,
        questionTags: [
          ...prevState.questionTags.slice(0, prevState.questionTags.length - 1),
        ],
      }));
      e.target.value = "";
    }
  };
  const handleDelete = (item) => {
    setQuestionData((prevState) => ({
      ...prevState,
      questionTags: prevState.questionTags.filter(
        (element) => element !== item
      ),
    }));
  };

  useEffect(() => {
    document
      .querySelector('input[type="file"]')
      .setAttribute("accept", "image/x-png,image/jpeg");
    document.querySelector('input[type="file"]').classList.add("form-control");
  });

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    heading: "",
    image: "",
    description: "",
    github: "",
    author: "",
    link: "",
  });

  const { category, id } = useParams();

  useEffect(() => {
    if (category) {
      const roadmaps = roadmapsData.find((roadmap) => roadmap.id === category);
      // if (!roadmaps) navigate("/not-found");

      const project = roadmaps.projects.find(
        (project) => project.id === parseInt(id)
      );

      // if (!project) navigate("/not-found");

      console.log(roadmaps, project);
      setFormData({ ...project });
    } else if (category === "new") {
    } else {
    }
  }, [navigate, id, category]);

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
    console.log(formData, questionData);
  };
  return (
    <>
      <MainContent
        direction={"column"}
        flex={4}
        style={{ paddingBottom: "10px" }}
      >
        <PageHeading style={{ marginBottom: "10px" }}>Post Project</PageHeading>
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
                <Form.Label>Title</Form.Label>
                <br />
                <Form.Control
                  name="heading"
                  value={formData.heading}
                  type="text"
                  placeholder="Enter project title"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-3">
                <Form.Label>Upload Header Image</Form.Label>
                <FileBase64
                  type="file"
                  name="image"
                  accept="image/x-png,image/gif,image/jpeg"
                  onDone={handleFileChange}
                />
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
                  value={formData.description}
                  type="text"
                  placeholder="what did you created?"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2">
                <Form.Label>Technology</Form.Label>
                <br />
                <DoubtInputTags style={{ minHeight: "50px" }}>
                  {questionData.questionTags.map((item, key) => (
                    <InputTags key={key}>
                      {item}
                      <InputDelete
                        src="/images/common/delete-cross.svg"
                        onClick={() => handleDelete(item)}
                      />
                    </InputTags>
                  ))}

                  <DoubtInputTag
                    onKeyUp={handleAdd}
                    onKeyDown={handleBack}
                    rows={1}
                    type="text"
                  />
                </DoubtInputTags>
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2">
                <Form.Label>Githup Link</Form.Label>
                <br />
                <Form.Control
                  name="github"
                  value={formData.github}
                  type="text"
                  placeholder="Enter github link(optional)"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2">
                <Form.Label>Project Link</Form.Label>
                <br />
                <Form.Control
                  name="link"
                  value={formData.link}
                  type="text"
                  placeholder="Enter project live url(optional)"
                  onChange={handleChange}
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
          <PrimaryButton onClick={handleSubmit} className="btn" type="submit">
            Submit
          </PrimaryButton>
        </Form>
      </MainContent>
      <RightSideBar heading="" content={[]} />
    </>
  );
};

export default NewProject;
