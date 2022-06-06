import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

import * as academicsActions from "../../store/academics";
import {
   MainContent,
   PageHeading,
} from "../../styledComponents/common/Common/Common.styles";
import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
import SubjectCard from "../../styledComponents/SubjectCard/SubjectCard";

// const subjects = [
//    {
//       title: "Software Testing & Quality assurance",
//       topics: [
//          {
//             topicName: "Unit 1 - Software Testing & Quality",
//             topicLink: "/some topic",
//          },
//          {
//             topicName: "Unit 2 - White Box Testing & Black Box Testing",
//             topicLink: "/some topic",
//          },
//          {
//             topicName: "Unit 3 - Quality Assurance & Standards",
//             topicLink: "/some topic",
//          },
//          {
//             topicName:
//                "Unit 4 - Test Selection & Minimization for Regression Testing ",
//             topicLink: "/some topic",
//          },
//       ],
//    },
//    {
//       title: "Software Testing & Quality assurance",
//       topics: [
//          {
//             topicName: "Unit 1 - Software Testing & Quality",
//             topicLink: "/some topic",
//          },
//          {
//             topicName: "Unit 2 - White Box Testing & Black Box Testing",
//             topicLink: "/some topic",
//          },
//          {
//             topicName: "Unit 3 - Quality Assurance & Standards",
//             topicLink: "/some topic",
//          },
//          {
//             topicName:
//                "Unit 4 - Test Selection & Minimization for Regression Testing ",
//             topicLink: "/some topic",
//          },
//       ],
//    },
// ];

// const rightSideBarData = {
//    heading: "Other Section",
//    content: [
//       "Industrial Traning Report Format",
//       "Industrial Traning Report Example",
//       "Minor/Major Project Synopsis Format",
//       "Minor/Major Project Report Format",
//    ],
// };

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
               <Alert severity="warning">No Data Found</Alert>
            )}
         </MainContent>
         <RightSideBar />
      </>
   );
};

export default Academics;
