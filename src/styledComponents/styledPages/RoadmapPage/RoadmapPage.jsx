import React from "react";
import {
  Content,
  DescText,
  Heading,
  MainContent,
  PageHeading,
  SecondaryHeading,
  StyledContainer,
  StyledMain,
} from "../../common/Common/Common.styles";
import { StyledLink } from "../../common/Common/Common";
import Navbar from "../../Navbar/Navbar";
import RightSideBar from "../../SidePanel/RightSideBar";
import SideBar from "../../SidePanel/SideBar";
import {
  Article,
  ArticleNumber,
  ArticlesContainer,
  ArticleTextCon,
  HeadingContainer,
  ProjectContainer,
} from "./RoadmapPage.styles";
import ProjectCard from "../../ProjectCard/ProjectCard";

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
  return (
    <StyledContainer>
      <Navbar />
      <StyledMain>
        <SideBar sideData={props.sideData} title="Roadmaps"></SideBar>{" "}
        <Content>
          <MainContent direction="column" flex={3}>
            <PageHeading>Web Development</PageHeading>
            <ArticlesContainer>
              <HeadingContainer>
                <SecondaryHeading>Featured Articles</SecondaryHeading>
                <StyledLink title="View All" link="/somewhre" />
              </HeadingContainer>

              <Article to="/somewhere">
                <ArticleNumber>01</ArticleNumber>
                <ArticleTextCon>
                  <Heading>Begin Web Development with Headstart</Heading>
                  <DescText style={{ fontSize: "12px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas lobortis risus nec metus luctus lacinia in nec
                    sapien.Quisque nec interdum neque. Ut non massa id odio
                    auctor...
                  </DescText>
                </ArticleTextCon>
              </Article>

              <Article to="/somewhere">
                <ArticleNumber>02</ArticleNumber>
                <ArticleTextCon>
                  <Heading>Begin Web Development with Headstart</Heading>
                  <DescText style={{ fontSize: "12px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas lobortis risus nec metus luctus lacinia in nec
                    sapien.Quisque nec interdum neque. Ut non massa id odio
                    auctor...
                  </DescText>
                </ArticleTextCon>
              </Article>

              <Article to="/somewhere">
                <ArticleNumber>03</ArticleNumber>
                <ArticleTextCon>
                  <Heading>Begin Web Development with Headstart</Heading>
                  <DescText style={{ fontSize: "12px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas lobortis risus nec metus luctus lacinia in nec
                    sapien.Quisque nec interdum neque. Ut non massa id odio
                    auctor...
                  </DescText>
                </ArticleTextCon>
              </Article>

              <Article to="/somewhere">
                <ArticleNumber>04</ArticleNumber>
                <ArticleTextCon>
                  <Heading>Begin Web Development with Headstart</Heading>
                  <DescText style={{ fontSize: "12px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas lobortis risus nec metus luctus lacinia in nec
                    sapien.Quisque nec interdum neque. Ut non massa id odio
                    auctor...
                  </DescText>
                </ArticleTextCon>
              </Article>
            </ArticlesContainer>

            <HeadingContainer>
              <SecondaryHeading>PROJECT IDEAS</SecondaryHeading>
              <StyledLink title="View All" link="/somewhre" />
            </HeadingContainer>
            <ProjectContainer>
              <ProjectCard
                small
                image="/images/projects/Image.svg"
                heading="OurApp - a social media web app in NodeJS"
                desc="Build this full stack application where you will get to learn about building modern, fast and scalable server-side web applications with NodeJS, databases like MongoDB and more."
              />

              <ProjectCard
                small
                image="/images/projects/Image.svg"
                heading="OurApp - a social media web app in NodeJS"
                desc="Build this full stack application where you will get to learn about building modern, fast and scalable server-side web applications with NodeJS, databases like MongoDB and more."
              />
            </ProjectContainer>
          </MainContent>
          <RightSideBar {...rightSideBarData} />
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default RoadmapPage;
