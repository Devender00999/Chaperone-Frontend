/** @format */

import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import {
   PageHeading,
   HeadingContainer,
   HeadingContent,
   MainContent,
   OutlinedButton,
   SearchInput,
} from "../../../styledComponents/common/Common/Common.styles";

// import Actions from "../../../redux/actions/Action";
import { useDispatch, useSelector } from "react-redux";
import * as academicsActions from "../../../store/academics";
import SubjectCard from "../../../styledComponents/SubjectCard/SubjectCard";
import { toast } from "react-toastify";
import Loader from "../../../components/Loader/Loader";
import { Alert } from "@mui/material";

const AcademicItems = () => {
   const dispatch = useDispatch();
   const [query, setQuery] = useState("");
   const allSubjects = useSelector(academicsActions.filterSubjects(query));
   const error = useSelector((state) => state.academics.error);
   const loading = useSelector((state) => state.academics.loading);

   const navigator = useNavigate();
   const handleEdit = (id) => {
      navigator(`${id}`);
   };

   const handleDelete = async (id) => {
      dispatch(academicsActions.removeSubject(id));
   };

   useEffect(() => {
      dispatch(academicsActions.loadAllSubjects());
   }, [dispatch]);

   useEffect(() => {
      if (error && loading === false) toast.error(error.message);
   }, [error, loading]);

   return (
      <>
         {loading ? (
            <Loader />
         ) : (
            <MainContent direction={"column"} flex={"auto"}>
               <HeadingContainer>
                  <PageHeading>Edit Your Uploaded Notes</PageHeading>
                  <HeadingContent>
                     <SearchInput
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                     />

                     <Link
                        style={{ textDecoration: "none", color: "White" }}
                        to="/admin/academics/new"
                     >
                        <OutlinedButton variant="outlined">
                           Add New
                        </OutlinedButton>
                     </Link>
                  </HeadingContent>
               </HeadingContainer>

               {allSubjects.length > 0 ? (
                  allSubjects.map((subject) => (
                     <SubjectCard
                        key={subject._id}
                        subject={subject}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                     />
                  ))
               ) : (
                  <Alert severity="warning">
                     No Notes Found. Will be added soon.
                  </Alert>
               )}
            </MainContent>
         )}
      </>
   );
};

export default AcademicItems;
