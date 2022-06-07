import React from "react";

import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
// import Tags from "../../styledComponents/Tags/Tags";
import { MainContent } from "../../styledComponents/common/Common/Common.styles";
import { Alert } from "@mui/material";

const AdminDashboard = () => {
   return (
      <>
         <MainContent direction="column" flex={3}>
            <h3 style={{ padding: "1rem 0" }}>This is Admin Dashboard</h3>
            <Alert>Nothing to see here. </Alert>
         </MainContent>

         <RightSideBar />
      </>
   );
};

export default AdminDashboard;
