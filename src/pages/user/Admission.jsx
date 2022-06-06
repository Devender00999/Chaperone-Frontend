import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@mui/material";

import * as admissionActions from "../../store/admissions";
import BlogsCard from "../../styledComponents/BlogsCard/BlogsCard";
import {
   MainContent,
   PageHeading,
} from "../../styledComponents/common/Common/Common.styles";
import Loader from "../../components/Loader/Loader";
import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";

// const rightSideBarData = {
//    heading: "Quick Links",
//    content: [
//       "Choice filling Round 1 for B Tech...",
//       "Final Datesheet for Reappear exam",
//       "Datesheet Mid Term exams",
//       "Scholarship Program",
//    ],
// };

const Admission = () => {
   const dispatch = useDispatch();
   const [apiCalled, setApiCalled] = useState(false);

   const admissionArticles = useSelector((state) => state.admissions.articles);
   const loading = useSelector((state) => state.admissions.loading);

   useEffect(() => {
      if (admissionArticles.length === 0 && !apiCalled) {
         dispatch(admissionActions.loadArticles());
         setApiCalled(true);
      }
   }, [admissionArticles, apiCalled, dispatch]);

   return (
      <>
         <MainContent direction="column" flex={3}>
            <PageHeading>Admissions</PageHeading>
            {loading ? (
               <Loader />
            ) : admissionArticles.length > 0 ? (
               admissionArticles.map((blog, id) => (
                  <BlogsCard type="admission" key={id} {...blog} />
               ))
            ) : (
               <Alert severity="warning">
                  Currently we don't have any articles. we will add them soon.
               </Alert>
            )}
         </MainContent>
         <RightSideBar />
      </>
   );
};

export default Admission;
