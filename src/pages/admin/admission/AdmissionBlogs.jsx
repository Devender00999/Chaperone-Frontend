import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../../../styledComponents/common/Table/DataTable";
import { admissionData } from "../../../data/admissionData";
import { useSelector } from "react-redux"
import {
  PageHeading,
  HeadingContainer,
  HeadingContent,
  MainContent,
  PrimaryButton,
} from "../../../styledComponents/common/Common/Common.styles";
import Request from "../../../requests/request";
import port from "../../../port";
import Actions from "../../../redux/actions/Action"
import { useDispatch } from "react-redux";

const AdmissionBlogs = () => {
  const admissionBlogs = useSelector((state) => state.allAdArticles)

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const handleEdit = (id) => {
    navigator(`${id}`);
    console.log(id);
  };

  const handleDelete = (id) => {
    const blogs = admissionBlogs.filter((blog) => blog.id !== id);
    // setAdmissionBlogs(blogs);
  };

  useEffect(async () => {
    const res = await Request.get("http://localhost:" + port + "/api/admissions/");
    console.log(res);
    dispatch(Actions.setAllAdArticles(res));
  }, [dispatch])

  return (
    <>
      <MainContent direction={"column"} flex={"auto"}>
        <HeadingContainer>
          <PageHeading>Edit Your Admission Blogs</PageHeading>
          <HeadingContent>
            <Form.Control
              style={{ width: "200px", padding: "0 20px", outline: "none" }}
              type="search"
              placeholder="Search"
            />
            <PrimaryButton className="primaryButton">
              <Link
                style={{ textDecoration: "none", color: "White" }}
                to="/admin/admissions/new"
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

export default AdmissionBlogs;
