/** @format */

import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../../../styledComponents/common/Table/DataTable";

import {
  PageHeading,
  HeadingContainer,
  HeadingContent,
  MainContent,
  PrimaryButton,
} from "../../../styledComponents/common/Common/Common.styles";

// import Actions from "../../../redux/actions/Action";
import { useSelector } from "react-redux";
import { admissionData } from "../../../data/admissionData";

const AcademicItems = () => {
  // const academicBlogs = useSelector((state) => state.allAcaArticles);
  const academicBlogs = admissionData;

  // const dispatch = useDispatch();
  const navigator = useNavigate();
  const handleEdit = (id) => {
    navigator(`${id}`);
  };

  const handleDelete = (id) => {
    // const res = await http.del(
    //   "http://localhost:" + port + "/api/academics/" + id
    // );
    // dispatch(Actions.deleteAcadArticle(id));
  };

  useEffect(() => {
    // const res = await http.get("http://localhost:" + port + "/api/academics/");
    // console.log(res);
    // dispatch(Actions.setallAcadArticles(res));
  }, []);

  return (
    <>
      <MainContent direction={"column"} flex={"auto"}>
        <HeadingContainer>
          <PageHeading>Edit Your Uploaded Notes</PageHeading>
          <HeadingContent>
            <Form.Control
              style={{ width: "200px", padding: "0 20px", outline: "none" }}
              type="search"
              placeholder="Search"
            />
            <Link
              style={{ textDecoration: "none", color: "White" }}
              to="/admin/academics/new"
            >
              <PrimaryButton className="primaryButton">Add New</PrimaryButton>
            </Link>
          </HeadingContent>
        </HeadingContainer>
        <DataTable
          data={academicBlogs}
          onEdit={handleEdit}
          onDelete={handleDelete}
          page="Academics"
        />
      </MainContent>
    </>
  );
};

export default AcademicItems;
