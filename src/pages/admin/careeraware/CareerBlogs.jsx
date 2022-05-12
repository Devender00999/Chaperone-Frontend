/** @format */

import React, { useEffect } from "react";
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
import http from "../../../requests/request";
import port from "../../../port";
import Actions from "../../../redux/actions/Action";
import { useDispatch, useSelector } from "react-redux";

const CareerBlogs = () => {
  const careerBlogs = useSelector((state) => state.careerArticles);

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const handleEdit = (id) => {
    navigator(`${id}`);
  };

  const handleDelete = async (id) => {
    const res = await http.del(
      "http://localhost:" + port + "/api/career/" + id
    );
    dispatch(Actions.deleteCareerArticle(id));
  };

  useEffect(async () => {
    const res = await http.get("http://localhost:" + port + "/api/career/");
    console.log(res);
    dispatch(Actions.setAllCareerArticles(res));
  }, [dispatch]);
  return (
    <>
      <MainContent direction={"column"} flex={"auto"}>
        <HeadingContainer>
          <PageHeading>Edit Your Career Oppotunities</PageHeading>
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
          data={careerBlogs}
          onEdit={handleEdit}
          onDelete={handleDelete}
          page="Career"
        />
      </MainContent>
    </>
  );
};

export default CareerBlogs;
