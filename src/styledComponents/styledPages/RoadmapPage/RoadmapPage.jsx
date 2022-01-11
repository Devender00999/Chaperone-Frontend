import React, { useState } from "react";

import {
  Content,
  DescText,
  Heading,
  MainContent,
  PageHeading,
  SecondaryHeading,
} from "../../common/Common/Common.styles";

import { GoBack, StyledLink } from "../../common/Common/Common";
import RightSideBar from "../../SidePanel/RightSideBar";
import {
  Article,
  ArticleNumber,
  ArticlesContainer,
  ArticleTextCon,
  HeadingContainer,
  ProjectContainer,
} from "./RoadmapPage.styles";

import ProjectCard from "../../ProjectCard/ProjectCard";
import { roadmapsData } from "../../../data/roadmaps";

const RoadmapPage = (props) => {
  const rightSideBarData = {
    heading: "Your Recents",
    content: [
      "Choice filling Round 1 for B Tech...",
      "Final Datesheet for Reappear exam",
      "Data Structures Notes",
      "Roadmap to UX Designing",
    ],
  };

  const [showArticles, setShowArticles] = useState(false);
  const articleLimit = showArticles
    ? roadmapsData[0].featuredArticles.length
    : 4;

  const [showProjects, setShowProjects] = useState(false);
  const projectLimit = showProjects ? roadmapsData[0].projectsIdeas.length : 2;
  return (
    <Content>
      <MainContent direction="column" flex={3}>
        <HeadingContainer>
          <PageHeading>Web Development</PageHeading>
          <GoBack title="" link="/roadmaps" />
        </HeadingContainer>

        <ArticlesContainer>
          <HeadingContainer>
            <SecondaryHeading>Featured Articles</SecondaryHeading>
            <StyledLink
              title="View All"
              onClick={() => setShowArticles((prev) => !prev)}
              link=""
            />
          </HeadingContainer>

          {roadmapsData[0].featuredArticles
            .slice(0, articleLimit)
            .map((article, index) => (
              <Article to="/blogs">
                <ArticleNumber>
                  {index < 10 - 1 ? "0" + (index + 1) : index + 1}
                </ArticleNumber>
                <ArticleTextCon>
                  <Heading>{article.heading}</Heading>
                  <DescText style={{ fontSize: "12px" }}>
                    {article.desc.substring(0, 150)}
                  </DescText>
                </ArticleTextCon>
              </Article>
            ))}
        </ArticlesContainer>

        <HeadingContainer>
          <SecondaryHeading>PROJECT IDEAS</SecondaryHeading>
          <StyledLink
            title="View All"
            link=""
            onClick={() => setShowProjects((prev) => !prev)}
          />
        </HeadingContainer>
        <ProjectContainer>
          {roadmapsData[0].projectsIdeas
            .slice(0, projectLimit)
            .map((project) => (
              <ProjectCard small {...project} />
            ))}
        </ProjectContainer>
      </MainContent>
      <RightSideBar {...rightSideBarData} />
    </Content>
  );
};

export default RoadmapPage;
