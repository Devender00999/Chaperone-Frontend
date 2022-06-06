import React from "react";

import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
import Tags from "../../styledComponents/Tags/Tags";
import { MainContent } from "../../styledComponents/common/Common/Common.styles";

const AdminDashboard = () => {
   const tags = [
      { value: "All", selected: true },
      { value: "Interest", selected: false },
      { value: "Interest", selected: false },
      { value: "Interest", selected: false },
      { value: "Interest", selected: false },
   ];
   return (
      <>
         <MainContent direction="column" flex={3}>
            <Tags tags={tags} />
            <h3 style={{ padding: "1rem 0" }}>This is Admin Dashboard</h3>
         </MainContent>

         <RightSideBar />
      </>
   );
};

export default AdminDashboard;
