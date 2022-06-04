import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import config from "../../config";
import {
   RoadmapsCard,
   RoadmapsCardImage,
   RoadmapsCardLink,
   RoadmapsCardList,
   RoadmapsCardListItem,
   RoadmapsCardTitle,
} from "./RoadmapCard.styles";

import * as roadmapActions from "../../store/roadmaps";

export const RoadmapCard = (props) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleRoadmapSelect = () => {
      dispatch(roadmapActions.selectRoadmap(props._id));
      navigate(`/dashboard/roadmaps/${props._id}`);
   };
   // const features = ["Roadmaps", "Projects", "Latest Trends"];
   return (
      <RoadmapsCard>
         <RoadmapsCardImage src={config.url + props.icon} alt={props.title} />

         <RoadmapsCardTitle>{props.title}</RoadmapsCardTitle>
         <RoadmapsCardList>
            {props.features.slice(0, 3).map((item, key) => (
               <RoadmapsCardListItem key={key}>{item}</RoadmapsCardListItem>
            ))}
         </RoadmapsCardList>
         <RoadmapsCardLink
            to={`/dashboard/roadmaps/${props._id}`}
            onClick={() => handleRoadmapSelect()}
         >
            <img src="/images/common/arrow.png" alt="Arrow" />
         </RoadmapsCardLink>
      </RoadmapsCard>
   );
};
