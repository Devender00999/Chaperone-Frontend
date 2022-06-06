import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as academicsActions from "../../store/academics";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import {
   MainContent,
   PageHeading,
} from "../../styledComponents/common/Common/Common.styles";
import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
import SubjectCard from "../../styledComponents/SubjectCard/SubjectCard";

const Academics = () => {
   const [isApiCalled, setIsApiCalled] = useState(false);
   const allSubjects = useSelector((state) => state.academics.allSubjects);
   const loading = useSelector((state) => state.academics.loading);
   const dispatch = useDispatch();

   useEffect(() => {
      if (!isApiCalled && allSubjects.length === 0) {
         setIsApiCalled(true);
         dispatch(academicsActions.loadAllSubjects());
      }
   }, [allSubjects, dispatch, isApiCalled]);

   return (
      <>
         <MainContent direction="column" flex={3} style={{ rowGap: "1rem" }}>
            <PageHeading>Academics</PageHeading>

            {loading ? (
               <Loader />
            ) : allSubjects.length > 0 ? (
               allSubjects.map((subject) => (
                  <SubjectCard key={subject._id} subject={subject} />
               ))
            ) : (
               <ErrorMessage severity="warning" error="No Data Found" />
            )}
         </MainContent>
         <RightSideBar />
      </>
   );
};

export default Academics;
