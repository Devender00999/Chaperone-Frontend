import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../../../styledComponents/common/Table/DataTable";
import { useDispatch, useSelector } from "react-redux";
import {
  PageHeading,
  HeadingContainer,
  HeadingContent,
  MainContent,
  PrimaryButton,
} from "../../../styledComponents/common/Common/Common.styles";
import http from "../../../services/httpService";
import config from "../../../config";
import Actions from "../../../redux/actions/Action";
import { toast } from "react-toastify";
// import Actions from "../../../redux/actions/Action";
// import { useDispatch } from "react-redux";

const AdmissionBlogs = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const handleEdit = (id) => {
    navigator(`${id}`);
  };
  const handleSearch = (e) => {
    const query = e.target.value;
    if (query.length > 0) {
      // console.log(admissionBlogs);
      let newBlogs = admissionBlogs.filter((blog) =>
        blog.heading.includes(query)
      );
      setAdmissionBlogs(newBlogs);
    } else {
      setAdmissionBlogs(admissions);
    }
  };
  const admissions = useSelector((state) => state.allAdArticles);
  let [admissionBlogs, setAdmissionBlogs] = useState(admissions);
  useEffect(() => {
    async function getAdmissionArticals() {
      const { data } = await http.get(config.apiUrl + "/admissions");
      dispatch(Actions.setAllAdArticles(data));
    }
    getAdmissionArticals();
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      const { data } = await http.delete(config.apiUrl + "/admissions/" + id);
      console.log(data);
      dispatch(Actions.deleteAdmisArticle(id));
      toast.success("Admission article deleted.");
    } catch (ex) {
      console.log(ex.message);
      toast.error(ex.response.message);
    }
  };
  return (
    <>
      <MainContent direction={"column"} flex={"auto"}>
        <HeadingContainer>
          <PageHeading>Edit Your Admission Blogs</PageHeading>
          <HeadingContent>
            <Form.Control
              style={{ width: "200px", outline: "none" }}
              type="search"
              placeholder="Search"
              onChange={handleSearch}
            />
            <Link
              style={{ textDecoration: "none", color: "White" }}
              to="/admin/admissions/new"
            >
              <PrimaryButton className="primaryButton">Add New</PrimaryButton>
            </Link>
          </HeadingContent>
        </HeadingContainer>
        <DataTable
          data={admissionBlogs}
          onEdit={handleEdit}
          onDelete={handleDelete}
          page="Admission"
        />
      </MainContent>
    </>
  );
};

export default AdmissionBlogs;
