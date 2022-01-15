import React, { useEffect, useState } from "react";

import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
import Tags from "../../styledComponents/Tags/Tags";
import { MainContent } from "../../styledComponents/common/Common/Common.styles";
import DataTable from "../../styledComponents/common/Table/DataTable";

const AdminDashboard = () => {
   const tags = [
      { value: "All", selected: true },
      { value: "Interest", selected: false },
      { value: "Interest", selected: false },
      { value: "Interest", selected: false },
      { value: "Interest", selected: false },
   ];

   const [allUsers, setAllUsers] = useState();
   useEffect(() => {
      async function getAllUsers() {}
   });

   return (
      <>
         <MainContent direction="column" flex={3}>
            <DataTable
            //  key={roadmap._id}
            //  id={roadmap._id}
            //  likes={false}
            //  data={roadmap.projects}
            //  onEdit={handleEdit}
            //  onDelete={handleDelete}
            />
         </MainContent>
         <RightSideBar heading="" content={[]} />
      </>
   );
};

export default AdminDashboard;
