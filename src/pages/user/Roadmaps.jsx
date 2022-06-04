import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
   MainContent,
   PageHeading,
} from "../../styledComponents/common/Common/Common.styles";
import { RoadmapCard } from "../../styledComponents/RoadmapCard/RoadmapCard";
import { RoadmapsCardContainer } from "../../styledComponents/RoadmapCard/RoadmapCard.styles";
import * as roadmapActions from "../../store/roadmaps";

const Roadmaps = (props) => {
   const [apiCalled, setApiCalled] = useState(false);
   const dispatch = useDispatch();

   const roadmaps = useSelector((state) => state.roadmaps.allRoadmaps);

   useEffect(() => {
      if (roadmaps && !apiCalled) {
         dispatch(roadmapActions.loadRoadmaps());
         setApiCalled(true);
      }
   }, [roadmaps, dispatch, apiCalled]);
   return (
      <>
         <MainContent direction="column" flex={3}>
            <PageHeading>Roadmaps</PageHeading>
            <RoadmapsCardContainer>
               {roadmaps.map((data) => (
                  <RoadmapCard key={data._id} {...data} />
               ))}
            </RoadmapsCardContainer>
         </MainContent>
      </>
   );
};

export default Roadmaps;
