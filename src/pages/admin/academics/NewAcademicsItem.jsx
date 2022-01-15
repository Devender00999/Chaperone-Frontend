import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from 'react-toastify';

import {
  MainContent,
  PageHeading,
  PrimaryButton,
} from "../../../styledComponents/common/Common/Common.styles";
import RightSideBar from "../../../styledComponents/SidePanel/RightSideBar";
import Request from "../../../requests/request"
import port from "../../../port.js"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Actions from "../../../redux/actions/Action"
import { useNavigate, useParams } from "react-router-dom";
import getUserDetails from "../../../requests/decode/decodeToken"

const NewAcademicsItem = () => {
  const user = getUserDetails();
  if (user === null)
    window.location.href = "/";
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const academicData = useSelector((state) => state.allAcaArticles);
  useEffect(() => {
    document
      .querySelector('input[type="file"]')
      .setAttribute("accept", "application/pdf");
    document.querySelector('input[type="file"]').classList.add("form-control");
  });

  const [formData, setFormData] = useState({
    tname: "",
    sem: "",
    branch: "",
    topname: "",
    notefile: "",
    subName: "Cloud Computing",
  });
  const [editorState, setEditorState] = useState();
  const { id } = params;

  const handlechange = (e) => {
    let { type, value, name } = e.target;

    if (type === "file") {
      value = URL.createObjectURL(e.target.files[0]);
      console.log(e);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const base64toBlob = (data = "") => {
    // Cut the prefix `data:application/pdf;base64` from the raw base 64
    const base64WithoutPrefix = data.substr('data:application/pdf;base64,'.length);

    const bytes = atob(base64WithoutPrefix);
    let length = bytes.length;
    let out = new Uint8Array(length);

    while (length--) {
      out[length] = bytes.charCodeAt(length);
    }

    return new Blob([out], { type: 'application/pdf' });
  };

  useEffect(() => {
    let article;
    if (id) {
      article = academicData.find((blog) => blog._id === id);
      if (article) {
        setFormData(article);
      } else if (id === "new") {
        let initialState = {
          tname: "",
          topname: "",
          sem: 1,
          branch: "CSE 1",
          notefile: "",
          subName: "Cloud Computing",
        };

        setFormData(initialState);
      } else {
        navigate("/not-found");
      }
    }
  }, [params, navigate, formData.content, academicData, id]);

  const handleFileChange = (e) => {
    const blob = base64toBlob(e.base64);
    const url = URL.createObjectURL(blob);
    setFormData((prev) => ({ ...prev, notefile: url }));
    console.log(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let content;
    if (id === "new") {
      const newAcademicData = { ...formData, author: user.name };
      console.log(newAcademicData);
      dispatch(Actions.addAdmisArticle(newAcademicData));

      const res = await Request.post("http://localhost:" + port + "/api/academics/", newAcademicData)
      console.log(res);
      toast.success("Article created successfully!!")
    } else {
      setFormData((prev) => ({ ...prev, content: content }));
      const index = academicData.findIndex((blog) => blog._id === formData._id);
      const nAcademicData = [...academicData];
      nAcademicData[index] = { ...formData, content: content };

      const res = await Request.put("http://localhost:" + port + "/api/academics/" + formData._id, nAcademicData[index])
      if (res.message === "Article Modify Successfully") {
        dispatch(Actions.editAdmisArticle(index, nAcademicData[index]));
        toast.success("Article modified successfully!!")
      }
      else {
        toast.error(res.message);
      }
    }
    navigate("/admin/academics");
  };

  const sem = [1, 2, 3, 4, 5, 6, 7, 8]
  const branch = [
    "CSE 1",
    "CSE 2",
    "CSE 3",
    "IT 1",
    "IT 2",
    "IT 3",
    "ECE 1",
    "ECE 2",
    "ECE 3",
    "EEE",
    "AI-DS",
    "AI-ML"
  ]
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
          <Row>
          <Col md style={{ paddingRight: 0 }}>
            <Form.Group className="mb-2">
              <Form.Label>Topic Name</Form.Label>
              <br />
              <Form.Control
                name="topname"
                value={formData.topname}
                type="text"
                placeholder="Enter topic name"
                onChange={handlechange}
              />
            </Form.Group>
          </Col>
          </Row>
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
                    name="sem"
                    type="text"
                    placeholder="Enter Heading"
                    onChange={handlechange}
                  >
                    {sem.map((cat) => (
                      <option value={cat} key={cat}>{cat}</option>
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
                    onChange={handlechange}
                  >
                    {branch.map((cat) => (
                      <option value={cat} key={cat}>{cat}</option>
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
                  name="subName"
                  type="text"
                  placeholder="Enter Heading"
                  onChange={handlechange}
                >
                  {roadmapCategories.map((cat) => (
                    <option value={cat} key={cat}>{cat}</option>
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
                  name="notefile"
                  accept="image/x-png,image/gif,image/jpeg"
                  onDone={handleFileChange}
                  placeholder="Enter Title"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <embed
                className="mb-3 mt-3"
                src={formData.notefile}
                style={{
                  width: "100%",
                  height: "400px",
                  display: formData.notefile ? "block" : "none",
                }}
              />
            </Col>
          </Row>

          <Col md style={{ paddingRight: 0 }}>
            <Form.Group className="mb-2">
              <Form.Label>Teacher</Form.Label>
              <br />
              <Form.Control
                name="tname"
                value={formData.tname}
                type="text"
                placeholder="Enter name of teacher"
                onChange={handlechange}
              />
            </Form.Group>
          </Col>
          <PrimaryButton onClick={handleSubmit} className="btn" type="submit">
            {id !== "new" ? "Save" : "Upload"} Note
          </PrimaryButton>
        </Form>
        {/* <div dangerouslySetInnerHTML={{ __html: markup }} /> */}
      </MainContent>
      <RightSideBar heading="" content={[]} />
    </>
  );
};

export default NewAcademicsItem;
