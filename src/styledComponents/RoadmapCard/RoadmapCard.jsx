import React from "react";
import {
   RoadmapsCard,
   RoadmapsCardImage,
   RoadmapsCardLink,
   RoadmapsCardList,
   RoadmapsCardListItem,
   RoadmapsCardTitle,
} from "./RoadmapCard.styles";

export const RoadmapCard = (props) => {
   return (
      <RoadmapsCard>
         <RoadmapsCardImage src={props.icon} alt={props.icon} />

         <RoadmapsCardTitle>{props.title}</RoadmapsCardTitle>
         <RoadmapsCardList>
            {props.features.map((item, key) => (
               <RoadmapsCardListItem key={key}>{item}</RoadmapsCardListItem>
            ))}
         </RoadmapsCardList>
         <RoadmapsCardLink to={`/dashboard/roadmaps/${props._id}`}>
            <img src="/images/common/arrow.png" alt="Arrow" />
         </RoadmapsCardLink>
      </RoadmapsCard>
   );
};
