import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import DataTable from "../../../styledComponents/common/Table/DataTable";
import Loader from "../../../components/Loader/Loader";
import {
   PageHeading,
   HeadingContainer,
   HeadingContent,
   MainContent,
   SearchInput,
} from "../../../styledComponents/common/Common/Common.styles";
import * as findPGActions from "../../../store/findPG";

const Pgs = () => {
   const navigator = useNavigate();
   const dispatch = useDispatch();

   const [query, setQuery] = useState("");
   // const [allPGDetails, setAdmissionBlogs] = useState(admissionData);
   const [apiCalled, setApiCalled] = useState();
   const allPGDetails = useSelector(findPGActions.filterPGDetails(query));
   const loading = useSelector((state) => state.findPG.loading);
   const error = useSelector((state) => state.findPG.error);

   useEffect(() => {
      if (!apiCalled && allPGDetails.length === 0) {
         dispatch(findPGActions.loadAllPGDetails());
         setApiCalled(true);
      }
   }, [apiCalled, allPGDetails, dispatch]);

   // Error handling
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
      const { status } = await dispatch(findPGActions.removePGDetails(id));
      console.log(status);
      if (status === 200) toast.success("PG Details Removed Successfully");
   };

   return loading ? (
      <Loader />
   ) : (
      <>
         <MainContent direction={"column"} flex={"auto"}>
            <HeadingContainer>
               <PageHeading>Edit Your PGs</PageHeading>
               <HeadingContent>
                  <SearchInput
                     placeholder="Search"
                     type="search"
                     value={query}
                     onChange={(e) => setQuery(e.target.value)}
                     className="form-control"
                  />
                  <Link
                     className="primaryButton"
                     to="/admin/find-pg/new"
                     style={{
                        textDecoration: "none",
                        color: "White",
                        background: "#ff6602",
                     }}
                  >
                     Add New
                  </Link>
               </HeadingContent>
            </HeadingContainer>
            <DataTable
               data={allPGDetails}
               onEdit={handleEdit}
               onDelete={handleDelete}
               page="FindPG"
            />
         </MainContent>
      </>
   );
};

export default Pgs;
