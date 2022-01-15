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
import Request from "../../../requests/request";
import port from "../../../port";
import Actions from "../../../redux/actions/Action"
import { useDispatch, useSelector } from "react-redux";

const AcademicItems = () => {
  const academicBlogs = useSelector((state) => state.allAcaArticles)

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const handleEdit = (id) => {
    navigator(`${id}`);
  };

  const handleDelete = async(id) => {
    const res = await Request.del("http://localhost:" + port + "/api/academics/" + id);
    dispatch(Actions.deleteAcadArticle(id));
  };

  useEffect(async () => {
    const res = await Request.get("http://localhost:" + port + "/api/academics/");
    console.log(res);
    dispatch(Actions.setallAcadArticles(res));
  }, [dispatch])

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
            <PrimaryButton className="primaryButton">
              <Link
                style={{ textDecoration: "none", color: "White" }}
                to="/admin/academics/new"
              >
                Add New
              </Link>
            </PrimaryButton>
          </HeadingContent>
        </HeadingContainer>
        <DataTable
          data={academicBlogs}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </MainContent>
    </>
  );
};

export default AcademicItems;
