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

const CareerBlogs = () => {
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
          <PageHeading>Edit Your Roadmap Blogs</PageHeading>
          <HeadingContent>
            <Form.Control
              style={{ width: "200px", padding: "0 20px", outline: "none" }}
              type="search"
              placeholder="Search"
            />
            <PrimaryButton className="primaryButton">
              <Link
                style={{ textDecoration: "none", color: "White" }}
                to="/admin/career-aware/new"
              >
                Add New
              </Link>
            </PrimaryButton>
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

export default CareerBlogs;
