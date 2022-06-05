import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import DataTable from "../../../styledComponents/common/Table/DataTable";
import {
   PageHeading,
   HeadingContainer,
   HeadingContent,
   MainContent,
   OutlinedButton,
   SearchInput,
} from "../../../styledComponents/common/Common/Common.styles";

import * as careerAwareActions from "../../../store/careeraware";
import Loader from "../../../components/Loader/Loader";

const CareerAware = () => {
   const dispatch = useDispatch();
   const navigator = useNavigate();
   const [query, setQuery] = useState("");
   const [apiCalled, setApiCalled] = useState(false);

   const articles = useSelector(careerAwareActions.filterArticles(query));
   const error = useSelector((state) => state.careerAware.error);
   const loading = useSelector((state) => state.careerAware.loading);

   // Retrieving all the careerAware articles
   useEffect(() => {
      if (!apiCalled && articles.length === 0) {
         dispatch(careerAwareActions.loadAllArticles());
         setApiCalled(true);
      }
   }, [dispatch, apiCalled, articles]);

   // Error Checking
   useEffect(() => {
      if (error && loading === false) {
         if (error.message.message) toast.error(error.message.message);
         else toast.error(error.statusMessage);
      }
   }, [error, loading]);

   const handleEdit = (id) => {
      navigator(`${id}`);
   };

   const handleDelete = async (id) => {
      const { status } = await dispatch(careerAwareActions.removeArticle(id));

      if (status === 200) toast.success("Job Article Removed Successfully.");
   };

   return loading ? (
      <Loader />
   ) : (
      <>
         <MainContent direction={"column"} flex={"auto"}>
            <HeadingContainer>
               <PageHeading>Edit Your Career Oppotunities</PageHeading>
               <HeadingContent>
                  <SearchInput
                     className="form-control"
                     value={query}
                     type="search"
                     placeholder="Search"
                     onChange={(e) => setQuery(e.target.value)}
                  />
                  <Link
                     style={{ textDecoration: "none", color: "White" }}
                     to="/admin/career-aware/new"
                  >
                     <OutlinedButton
                        variant="outlined"
                        className="primaryButton"
                     >
                        Add New
                     </OutlinedButton>
                  </Link>
               </HeadingContent>
            </HeadingContainer>
            <DataTable
               data={articles}
               onEdit={handleEdit}
               onDelete={handleDelete}
               page="Career"
            />
         </MainContent>
      </>
   );
};

export default CareerAware;
