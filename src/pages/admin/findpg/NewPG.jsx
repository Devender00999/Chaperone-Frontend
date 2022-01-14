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

const NewPG = () => {
  useEffect(() => {
    document
      .querySelector('input[type="file"]')
      .setAttribute("accept", "image/x-png,image/jpeg");
    document.querySelector('input[type="file"]').classList.add("form-control");
  });

  const [formData, setFormData] = useState({
    type: "Drawing Board",
    priceRange: "Rs 200 - RS 300",
    productName: "",
    images: [],
    ownerName: "",
    ownerNumber: "",
    amenties: "",
    houseRules: "",
    otherCharges: "",
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
    setFormData((prev) => ({ ...prev, images: e.map((item) => item.base64) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.amenties.includes("\n")) {
      formData.amenties = formData.amenties.split("\n");
    }

    if (formData.houseRules.includes("\n")) {
      formData.houseRules = formData.houseRules.split("\n");
    }

    if (formData.otherCharges.includes("\n")) {
      formData.otherCharges = formData.otherCharges.split("\n");
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
        <PageHeading style={{ marginBottom: "10px" }}>Find PG</PageHeading>
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
                <Form.Label>PG Name</Form.Label>
                <br />
                <Form.Control
                  type="text"
                  value={formData.pgName}
                  className="mb-2 d-flex pe-0"
                  name="pgName"
                  placeholder="Enter pg name"
                  onChange={handleChange}
                />
              </div>
              <div style={{ flex: 1 }}>
                <Form.Label>Price Range</Form.Label>
                <br />

                <Form.Control
                  type="text"
                  className="mb-2 d-flex pe-0"
                  value={formData.rent}
                  placeholder="Enter rent/month"
                  name="rent"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group>
                <Form.Label> Address</Form.Label>
                <br />

                <Form.Control
                  className="mb-2 d-flex pe-0"
                  name="address"
                  type="text"
                  value={formData.address}
                  placeholder="Enter address"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-3">
                <Form.Label>Upload PG Images</Form.Label>
                <FileBase64
                  multiple={true}
                  name="images"
                  onDone={handleFileChange}
                />
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2 d-flex" style={{ columnGap: "20px" }}>
                <div style={{ flex: 1 }}>
                  <Form.Label>Owner's Name </Form.Label>
                  <br />

                  <Form.Control
                    name="ownerName"
                    type="name"
                    placeholder="Enter owner's name"
                    onChange={handleChange}
                    value={formData.ownerName}
                    required
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <Form.Label>Owner’s Contact Number</Form.Label>
                  <br />
                  <Form.Control
                    name="ownerNumber"
                    type="number"
                    placeholder="Enter owner's number"
                    onChange={handleChange}
                    value={formData.ownerNumber}
                    maxLength={10}
                    minLength={10}
                    required
                  />
                </div>
              </Form.Group>
            </Col>

            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2 pe-0">
                <Form.Label>Amenties</Form.Label>
                <br />
                <Form.Control
                  as={"textarea"}
                  rows={4}
                  value={formData.amenties}
                  name="amenties"
                  type="text"
                  placeholder="Enter ementies"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2 pe-0">
                <Form.Label>House Rules</Form.Label>
                <br />
                <Form.Control
                  as={"textarea"}
                  rows={4}
                  value={formData.houseRules}
                  name="houseRules"
                  type="text"
                  placeholder="Enter rules & regulations"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md style={{ paddingRight: 0 }}>
              <Form.Group className="mb-2 pe-0">
                <Form.Label>Other Charges</Form.Label>
                <br />
                <Form.Control
                  as={"textarea"}
                  rows={4}
                  value={formData.otherCharges}
                  name="otherCharges"
                  type="text"
                  placeholder="Enter other charges (if any)"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
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

export default NewPG;
