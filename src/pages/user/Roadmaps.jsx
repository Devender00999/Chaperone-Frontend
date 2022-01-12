import React from "react";
import { roadmaps } from "../../data/roadmaps";
import {
  MainContent,
  PageHeading,
} from "../../styledComponents/common/Common/Common.styles";
import { RoadmapCard } from "../../styledComponents/RoadmapCard/RoadmapCard";
import { RoadmapsCardContainer } from "../../styledComponents/RoadmapCard/RoadmapCard.styles";

const Roadmaps = (props) => {
  return (
    <>
      <MainContent direction="column" flex={3}>
        <PageHeading>Roadmaps</PageHeading>
        <RoadmapsCardContainer>
          {roadmaps.map((data) => (
            <RoadmapCard key={data.id} {...data} />
          ))}
        </RoadmapsCardContainer>
      </MainContent>
    </>
  );
};

export default Roadmaps;
