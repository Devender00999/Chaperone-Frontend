import React, { useEffect, useState } from "react";
import {
   MainContent,
   PageHeading,
} from "../../styledComponents/common/Common/Common.styles";
import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
import Search from "../../styledComponents/Navbar/Search";
import DoubtDeskCard from "../../styledComponents/DoubtDeskCard/DoubtDeskCard";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import * as doubtdeskActions from "../../store/doubtdesk";
import getUserDetails from "../../requests/decode/decodeToken";
import { useNavigate } from "react-router";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const DoubtDesk = (props) => {
   const rightSideBarData = {
      heading: "Other Section",
      content: ["New Questions"],
   };
   const [apiCalled, setApiCalled] = useState();

   const allDoubts = useSelector(doubtdeskActions.filteredDoubts());
   const loading = useSelector((state) => state.doubtdesk.loading);
   const query = useSelector((state) => state.doubtdesk.query);
   const [currentQues, setCurrentQues] = useState(null);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const user = getUserDetails();
   useEffect(() => {
      if (allDoubts.length === 0 && !apiCalled) {
         dispatch(doubtdeskActions.loadAllQuestions());
         setApiCalled(true);
      }
   }, [dispatch, allDoubts, apiCalled]);
   return loading ? (
      <Loader />
   ) : (
      <>
         <MainContent direction="column" flex={3}>
            <PageHeading>Doubt Desk</PageHeading>
            <Search query={query} setQuery={doubtdeskActions.addQuery}></Search>
            {allDoubts.length !== 0
               ? allDoubts.map((doubt, key) => (
                    <div
                       key={key}
                       style={{
                          position: "relative",
                       }}
                       onMouseOver={() => setCurrentQues(doubt._id)}
                       onMouseOut={() => setCurrentQues(null)}
                    >
                       <DoubtDeskCard doubt={doubt}></DoubtDeskCard>
                       {user._id === doubt.author._id && (
                          <div
                             style={{
                                position: "absolute",
                                display:
                                   currentQues === doubt._id ? "block" : "none",
                                top: "10px",
                                right: "10px",
                             }}
                          >
                             <EditIcon
                                // src="/images/common/cross.svg"
                                style={{
                                   width: "25px",
                                   cursor: "pointer",
                                   marginRight: "10px",
                                   color: "#FF6600",
                                }}
                                onClick={() =>
                                   navigate(
                                      `/dashboard/doubt-desk/ask-question/` +
                                         doubt._id
                                   )
                                }
                             />
                             <DeleteOutlineIcon
                                src="/images/common/cross.svg"
                                style={{
                                   width: "25px",
                                   cursor: "pointer",
                                   color: "#FF6600",
                                }}
                                onClick={() =>
                                   dispatch(
                                      doubtdeskActions.removeDoubt(doubt._id)
                                   )
                                }
                             />
                          </div>
                       )}
                    </div>
                 ))
               : "No Question Found"}
         </MainContent>
         <RightSideBar {...rightSideBarData} />
      </>
   );
};

export default DoubtDesk;
