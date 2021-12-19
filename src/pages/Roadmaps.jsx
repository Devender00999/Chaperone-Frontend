import React from "react";
import {
  Content,
  MainContent,
  PageHeading,
  StyledContainer,
  StyledMain,
} from "../styledComponents/common/Common/Common.styles";
import Navbar from "../styledComponents/Navbar/Navbar";
import { RoadmapCard } from "../styledComponents/RoadmapCard/RoadmapCard";
import SideBar from "../styledComponents/SidePanel/SideBar";
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
    <StyledContainer id="container">
      <Navbar />
      <StyledMain className="main">
        <SideBar sideData={props.sideData} title="Roadmaps"></SideBar>
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
      </StyledMain>
    </StyledContainer>
  );
};

export default Roadmaps;
