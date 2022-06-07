import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import BlogsCard from "../../styledComponents/BlogsCard/BlogsCard";
import { MainContent } from "../../styledComponents/common/Common/Common.styles";
import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
import CareerCard from "../../styledComponents/CareerCard/CareerCard";
import EasyBuyCard from "../../styledComponents/EasyBuyCard/EasyBuyCard";
import ProjectCard from "../../styledComponents/ProjectCard/ProjectCard";
import PGCard from "../../styledComponents/PGCard/PGCard";
import { filteredData, loadAllData } from "../../store/homescreen";
import Loader from "../../components/Loader/Loader";

const HomeScreen = (props) => {
   const dispatch = useDispatch();
   const [apiCalled, setApiCalled] = useState(false);

   const allData = useSelector(filteredData());
   const loading = useSelector((state) => state.homescreen.loading);

   useEffect(() => {
      if (allData.length === 0 && !apiCalled) {
         dispatch(loadAllData());
         setApiCalled(true);
      }
   }, [allData, apiCalled, dispatch]);
   const chooseComponent = (type, id, data) => {
      if (type === "roadmaps")
         return (
            <BlogsCard
               type={"roadmaps/" + data.data.roadmapId}
               key={id}
               {...data.data}
            />
         );
      if (type === "admission")
         return <BlogsCard type={"admission"} key={id} {...data.data} />;

      if (type === "products") return <EasyBuyCard key={id} data={data.data} />;
      if (type === "projects")
         return <ProjectCard key={id} projectDetails={data.data} />;
      if (type === "careers") return <CareerCard key={id} data={data.data} />;
      if (type === "findpg") return <PGCard key={id} pgDetails={data.data} />;
   };

   return loading ? (
      <Loader />
   ) : (
      <>
         <MainContent direction="column" flex={3}>
            {/* <Tags tags={tags} /> */}
            {allData.map((blog, id) => chooseComponent(blog.type, id, blog))}
         </MainContent>
         <RightSideBar />
      </>
   );
};

export default HomeScreen;
