import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
   MainContent,
   PageHeading,
   SearchInput,
} from "../../styledComponents/common/Common/Common.styles";
import CareerCard from "../../styledComponents/CareerCard/CareerCard";
import SelectTag from "../../styledComponents/SelectTag/SelectTag";
import { SelectTags } from "../../styledComponents/SelectTag/SelectTag.styles";
import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
import Loader from "../../components/Loader/Loader";
import * as careerAwareActions from "../../store/careeraware";

const profileTypes = ["Internship", "Full-Time"];
const profiles = [
   "Web Developer",
   "Android Developer",
   "Java Developer",
   "Frontend Developer",
   "Backend Developer",
   "Software Developer",
   "Full Stack Developer",
];

const CareerAware = () => {
   const dispatch = useDispatch();
   const [query, setQuery] = useState("");
   const [apiCalled, setApiCalled] = useState(false);

   const allArticles = useSelector(careerAwareActions.filterArticles(query));
   const loading = useSelector((state) => state.careerAware.loading);

   useEffect(() => {
      if (!apiCalled && allArticles.length === 0) {
         dispatch(careerAwareActions.loadAllArticles());
         setApiCalled(true);
      }
   }, [allArticles, apiCalled, dispatch]);

   return (
      <>
         <MainContent direction="column" flex={3}>
            <PageHeading>Career Aware</PageHeading>
            {loading ? (
               <Loader />
            ) : (
               <>
                  <SelectTags>
                     <SelectTag
                        selected={true}
                        defaultValue="All Type"
                        value={query}
                        options={profileTypes}
                        onChange={(e) => setQuery(e.target.value)}
                     />

                     <SelectTag
                        selected={false}
                        defaultValue="All Profile"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        options={profiles}
                     />

                     <SearchInput
                        className="form-control"
                        placeholder="Search"
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        options={profiles}
                     />
                  </SelectTags>

                  {allArticles.map((article, id) => (
                     <CareerCard key={id} data={article} />
                  ))}
               </>
            )}
         </MainContent>
         <RightSideBar  />
      </>
   );
};

export default CareerAware;
