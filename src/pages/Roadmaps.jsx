import React from "react";
import {
  Content,
  MainContent,
  PageHeading,
} from "../styledComponents/common/Common/Common.styles";
import { RoadmapCard } from "../styledComponents/RoadmapCard/RoadmapCard";
import { RoadmapsCardContainer } from "../styledComponents/RoadmapCard/RoadmapCard.styles";
const roadmap = [
  {
    id: "roadmaptrack001",
    roadmapImg: "/images/roadmaps/cloud-computing.svg",
    roadmapTitle: "Cloud Computing",
    roadMapList: ["Roadmap", "Projects", "Latest Treads for 2021"],
    roadMapLink: "/",
  },
  {
    id: "roadmaptrack002",
    roadmapImg: "/images/roadmaps/web-technology.svg",
    roadmapTitle: "Web Technology",
    roadMapList: ["Roadmap", "Projects", "Latest Treads for 2021"],
    roadMapLink: "/roadmap-page",
  },
  {
    id: "roadmaptrack003",
    roadmapImg: "/images/roadmaps/machine-learning.svg",
    roadmapTitle: "Machine Learning",
    roadMapList: ["Roadmap", "Projects", "Latest Treads for 2021"],
    roadMapLink: "/",
  },
  {
    id: "roadmaptrack004",
    roadmapImg: "/images/roadmaps/data-science.svg",
    roadmapTitle: "Data Science",
    roadMapList: ["Roadmap", "Projects", "Latest Treads for 2021"],
    roadMapLink: "/",
  },
  {
    id: "roadmaptrack005",
    roadmapImg: "/images/roadmaps/ux-design.svg",
    roadmapTitle: "UX Desinging",
    roadMapList: ["Roadmap", "Projects", "Latest Treads for 2021"],
    roadMapLink: "/",
  },
  {
    id: "roadmaptrack006",
    roadmapImg: "/images/roadmaps/blockchain.svg",
    roadmapTitle: "Blockchain",
    roadMapList: ["Roadmap", "Projects", "Latest Treads for 2021"],
    roadMapLink: "/",
  },
];
const Roadmaps = (props) => {
  return (
    <Content>
      <MainContent direction="column" flex={3}>
        <PageHeading>Roadmaps</PageHeading>
        <RoadmapsCardContainer>
          {roadmap.map((data) => (
            <RoadmapCard key={data.id} {...data} />
          ))}
        </RoadmapsCardContainer>
      </MainContent>
    </Content>
  );
};

export default Roadmaps;
