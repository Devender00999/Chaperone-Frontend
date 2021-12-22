import React from "react";
import {
  Content,
  MainContent,
  StyledContainer,
  StyledMain,
  PageHeading,
} from "../styledComponents/common/Common/Common.styles";
import Navbar from "../styledComponents/Navbar/Navbar";
import SideBar from "../styledComponents/SidePanel/SideBar";
import RightSideBar from "../styledComponents/SidePanel/RightSideBar";
import Search from "../styledComponents/Navbar/Search";

import DoubtDeskCards from "../styledComponents/DoubtDeskCard/DoubtDeskCard";

const DoubtDesk = (props) => {
  const data = [
    {
      question: "How to create custom tooltip in CSS?",
      askedBy: "Devender Kumar",
      views: 3,
      answers: [],
      postedTime: "",
      tags: ["HTML", "CSS", "React"],
    },
    {
      question: "How to create custom tooltip in CSS?",
      askedBy: "Devender Kumar",
      views: 3,
      answers: [],
      postedTime: "",
      tags: ["HTML", "CSS", "React"],
    },
    {
      question: "How to create custom tooltip in CSS?",
      askedBy: "Devender Kumar",
      views: 3,
      answers: [],
      postedTime: "",
      tags: ["HTML", "CSS", "React"],
    },
    {
      question: "How to create custom tooltip in CSS?",
      askedBy: "Devender Kumar",
      views: 3,
      answers: [],
      postedTime: "",
      tags: ["HTML", "CSS", "React"],
    },
  ];
  const rightSideBarData = {
    heading: "Other Section",
    content: ["New Questions", "My Questions", "My Answers", "Ask a Question"],
  };
  return (
    <StyledContainer id="container">
      <Navbar />
      <StyledMain className="main">
        <SideBar sideData={props.sideData} title="Doubt Desk"></SideBar>
        <Content>
          <MainContent direction="column" flex={3}>
            <PageHeading>Doubt Desk</PageHeading>
            <Search width="100%"></Search>
            <DoubtDeskCards data={data} />
          </MainContent>
          <RightSideBar {...rightSideBarData} />
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default DoubtDesk;
