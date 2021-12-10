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
        <SideBar title="Dashboard"></SideBar>
        <Content>
          <MainContent direction="column">
            <Tags tags={tags} />
            <Card />
          </MainContent>
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default HomeScreen;
