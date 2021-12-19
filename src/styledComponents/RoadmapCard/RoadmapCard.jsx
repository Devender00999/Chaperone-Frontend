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
      <RoadmapsCardImage src={props.roadmapImg} alt={props.roadmapImg} />

      <RoadmapsCardTitle>{props.roadmapTitle}</RoadmapsCardTitle>
      <RoadmapsCardList>
        {props.roadMapList.map((item, key) => (
          <RoadmapsCardListItem key={key}>{item}</RoadmapsCardListItem>
        ))}
      </RoadmapsCardList>
      <RoadmapsCardLink to={props.roadMapLink}>
        <img src="/images/common/arrow.png" alt="Arrow" />
      </RoadmapsCardLink>
    </RoadmapsCard>
  );
};
