import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../../../styledComponents/common/Table/DataTable";
import {
   PageHeading,
   HeadingContainer,
   HeadingContent,
   MainContent,
   PrimaryButton,
   Heading,
} from "../../../styledComponents/common/Common/Common.styles";

import { useDispatch, useSelector } from "react-redux";
import * as roadmapActions from "../../../store/roadmaps";
import Loader from "../../../components/Loader/Loader";

const Projects = () => {
   // const [roadmaps, setRoadmaps] = useState(roadmapsData);
   const navigator = useNavigate();
   const dispatch = useDispatch();

   const roadmaps = useSelector((state) => state.roadmaps.allRoadmaps);
   const loading = useSelector((state) => state.roadmaps.loading);
   const [isApiCalled, setIsApiCalled] = useState();

   // handle edit project
   const handleEdit = (articleId, roadmapId) => {
      dispatch(roadmapActions.selectProject(roadmapId, articleId));
      navigator(`${roadmapId}/${articleId}`);
   };

   // handle delete project
   const handleDelete = (projectId, roadmapId) => {
      dispatch(roadmapActions.removeProject(roadmapId, projectId));
   };

   useEffect(() => {
      if (roadmaps.length === 0 && !isApiCalled) {
         dispatch(roadmapActions.loadRoadmaps());
         setIsApiCalled(true);
      }
   }, [dispatch, isApiCalled, roadmaps]);

   return loading ? (
      <Loader />
   ) : (
      <>
         <MainContent direction={"column"} flex={"auto"}>
            <HeadingContainer>
               <PageHeading>Projects</PageHeading>
               <HeadingContent>
                  <PrimaryButton className="primaryButton">
                     <Link
                        style={{ textDecoration: "none", color: "White" }}
                        to="/admin/projects/newProject"
                     >
                        Add New
                     </Link>
                  </PrimaryButton>
               </HeadingContent>
            </HeadingContainer>
            {roadmaps.map((roadmap) => (
               <div key={roadmap._id}>
                  <Heading
                     style={{
                        padding: 0,
                        paddingBottom: "5px",
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                        margin: "2rem 0 0",
                        marginTop: "1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#f60",
                     }}
                  >
                     {roadmap.title}
                  </Heading>
                  <DataTable
                     key={roadmap._id}
                     id={roadmap._id}
                     likes={false}
                     data={roadmap.projects}
                     onEdit={handleEdit}
                     onDelete={handleDelete}
                  />
               </div>
            ))}
         </MainContent>
      </>
   );
};

export default Projects;
