import React from "react";
import { Col, Form } from "react-bootstrap";
const TextInput = ({ heading, formData, placeholder, handleChange }) => {
  return (
    <Col md style={{ paddingRight: 0 }}>
      <Form.Group className="mb-2">
        <Form.Label style={{ display: "block" }}>{heading}</Form.Label>
        <Form.Control
          name={heading}
          value={formData.heading}
          type="text"
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>
    </Col>
  );
};

export default TextInput;
