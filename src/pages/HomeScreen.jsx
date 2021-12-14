import React from "react";
import Card from "../styledComponents/common/Card/Card";
import {
  Content,
  MainContent,
  StyledContainer,
  StyledMain,
} from "../styledComponents/common/Common.styles";
import Navbar from "../styledComponents/Navbar/Navbar";
import SideBar from "../styledComponents/SidePanel/SideBar";
import Tags from "../styledComponents/Tags/Tags";
import RightSideBar from "../styledComponents/SidePanel/RightSideBar";
import { SecondaryButton } from "../components/common/Button.styles";

const HomeScreen = (props) => {
  const tags = [
    { value: "All", selected: true },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
  ];

  return (
    <StyledContainer id="container">
      <Navbar />
      <StyledMain className="main">
        <SideBar sideData={props.sideData} title="Home"></SideBar>
        <Content>
          <MainContent direction="column" flex={3}>
            <Tags tags={tags} />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <SecondaryButton to="">View Project</SecondaryButton>
            <SecondaryButton to="">Github Link</SecondaryButton>
          </MainContent>
          <RightSideBar />
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default HomeScreen;
