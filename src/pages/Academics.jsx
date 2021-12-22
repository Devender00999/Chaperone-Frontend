import React from "react";
import {
  Content,
  MainContent,
  PageHeading,
  StyledContainer,
  StyledMain,
} from "../styledComponents/common/Common/Common.styles";
import Navbar from "../styledComponents/Navbar/Navbar";
import SideBar from "../styledComponents/SidePanel/SideBar";
import RightSideBar from "../styledComponents/SidePanel/RightSideBar";
import SubjectCard from "../styledComponents/SubjectCard/SubjectCard";

const Academics = (props) => {
  const subjects = [
    {
      title: "Software Testing & Quality assurance",
      topics: [
        {
          topicName: "Unit 1 - Software Testing & Quality",
          topicLink: "/some topic",
        },
        {
          topicName: "Unit 2 - White Box Testing & Black Box Testing",
          topicLink: "/some topic",
        },
        {
          topicName: "Unit 3 - Quality Assurance & Standards",
          topicLink: "/some topic",
        },
        {
          topicName:
            "Unit 4 - Test Selection & Minimization for Regression Testing ",
          topicLink: "/some topic",
        },
      ],
    },
    {
      title: "Software Testing & Quality assurance",
      topics: [
        {
          topicName: "Unit 1 - Software Testing & Quality",
          topicLink: "/some topic",
        },
        {
          topicName: "Unit 2 - White Box Testing & Black Box Testing",
          topicLink: "/some topic",
        },
        {
          topicName: "Unit 3 - Quality Assurance & Standards",
          topicLink: "/some topic",
        },
        {
          topicName:
            "Unit 4 - Test Selection & Minimization for Regression Testing ",
          topicLink: "/some topic",
        },
      ],
    },
  ];
  const rightSideBarData = {
    heading: "Other Section",
    content: [
      "Industrial Traning Report Format",
      "Industrial Traning Report Example",
      "Minor/Major Project Synopsis Format",
      "Minor/Major Project Report Format",
    ],
  };
  return (
    <StyledContainer id="container">
      <Navbar />
      <StyledMain className="main">
        <SideBar sideData={props.sideData} title="Academics"></SideBar>
        <Content>
          <MainContent direction="column" flex={3}>
            <PageHeading>Academics</PageHeading>
            {subjects.map((subject, i) => (
              <SubjectCard key={i} subject={subject} />
            ))}
          </MainContent>
          <RightSideBar {...rightSideBarData} />
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default Academics;
