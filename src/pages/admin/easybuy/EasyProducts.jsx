import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../../../styledComponents/common/Table/DataTable";
import { admissionData } from "../../../data/admissionData";
import {
  PageHeading,
  HeadingContainer,
  HeadingContent,
  MainContent,
  PrimaryButton,
} from "../../../styledComponents/common/Common/Common.styles";

const EasyProducts = () => {
  const [admissionBlogs, setAdmissionBlogs] = useState(admissionData);

  const navigator = useNavigate();
  const handleEdit = (id) => {
    navigator(`${id}`);
  };

  const handleDelete = (id) => {
    const blogs = admissionBlogs.filter((blog) => blog.id !== id);
    setAdmissionBlogs(blogs);
  };

  return (
    <>
      <MainContent direction={"column"} flex={"auto"}>
        <HeadingContainer>
          <PageHeading>Edit Your Listed products</PageHeading>
          <HeadingContent>
            <Form.Control
              style={{ width: "200px", padding: "0 20px", outline: "none" }}
              type="search"
              placeholder="Search"
            />
            <Link
              className="primaryButton"
              style={{ textDecoration: "none", color: "White" }}
              to="/admin/easy-buy/new"
            >
              <PrimaryButton className="primaryButton">Add New</PrimaryButton>
            </Link>
          </HeadingContent>
        </HeadingContainer>
        <DataTable
          data={admissionBlogs}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </MainContent>
    </>
  );
};

export default EasyProducts;
