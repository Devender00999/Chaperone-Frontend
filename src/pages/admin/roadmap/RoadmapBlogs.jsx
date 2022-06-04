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

const RoadmapBlogs = () => {
   // const [roadmaps, setRoadmaps] = useState(roadmapsData);
   const dispatch = useDispatch();
   const navigator = useNavigate();
   const roadmaps = useSelector((state) => state.roadmaps.allRoadmaps);
   const error = useSelector((state) => state.roadmaps.error);
   const [isApiCalled, setIsApiCalled] = useState(false);

   const handleEdit = (id, roadmapId) => {
      dispatch(roadmapActions.selectArticle(roadmapId, id));
      navigator(`${roadmapId}/${id}`);
   };

   const handleDelete = (id, roadmapId) => {
      dispatch(roadmapActions.removeArticle(roadmapId, id));
   };

   useEffect(() => {
      if (error != null) {
         console.log(error);
         dispatch(roadmapActions.cleanError());
      }
      if (roadmaps.length === 0 && !isApiCalled) {
         dispatch(roadmapActions.loadRoadmaps());
         setIsApiCalled(true);
      }
   }, [dispatch, error, isApiCalled, roadmaps]);

   return (
      <>
         <MainContent direction={"column"} flex={"auto"}>
            <HeadingContainer>
               <PageHeading>Edit Your Roadmap Blogs</PageHeading>
               <HeadingContent>
                  <PrimaryButton className="primaryButton">
                     <Link
                        style={{ textDecoration: "none", color: "White" }}
                        to="/admin/roadmaps/new"
                     >
                        Add New Article
                     </Link>
                  </PrimaryButton>
               </HeadingContent>
            </HeadingContainer>
            {roadmaps.map((roadmap) => (
               <div key={roadmap._id}>
                  <Heading
                     style={{
                        padding: "1rem 1rem",
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                        margin: "1rem 0 0",
                        // boxShadow: "0 0 5px rgb(0 0 0 / 10%)",
                        color: "#f60",
                        textAlign: "center",
                     }}
                  >
                     {roadmap.title}
                  </Heading>
                  <DataTable
                     key={roadmap._id}
                     id={roadmap._id}
                     data={roadmap.articles}
                     onEdit={handleEdit}
                     onDelete={handleDelete}
                  />
               </div>
            ))}
            <Link
               style={{
                  textDecoration: "none",
                  color: "White",
                  marginTop: "30px",
               }}
               to="/admin/roadmaps/new"
            >
               <PrimaryButton className="primaryButton">
                  Add New Category
               </PrimaryButton>
            </Link>
         </MainContent>
      </>
   );
};

export default RoadmapBlogs;
