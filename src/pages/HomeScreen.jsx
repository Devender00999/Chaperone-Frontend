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

const HomeScreen = (props) => {
  const tags = [
    { value: "All", selected: true },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
  ];
  const sideData = [
    {
      title: "Home",
      link: "/",
      icon: "/images/common/home.svg",
      selected: true,
    },
    {
      title: "Admission",
      link: "/admin/blogs",
      icon: "/images/sidebar/blogs.svg",
      selected: false,
    },
    {
      title: "Roadmap",
      link: "/admin/blogs",
      icon: "/images/sidebar/blogs.svg",
      selected: false,
    },
    {
      title: "Career Aware",
      link: "/admin/career-aware",
      icon: "/images/sidebar/careeraware.svg",
      selected: false,
    },
    {
      title: "Find PG",
      link: "/admin/find-pg",
      icon: "/images/sidebar/findpg.svg",
      selected: false,
    },
    {
      title: "Easy Buy",
      link: "/admin/easy-buy",
      icon: "/images/sidebar/easybuy.svg",
      selected: false,
    },
  ];

  return (
    <StyledContainer id="container">
      <Navbar />
      <StyledMain className="main">
        <SideBar sideData={sideData} title="Home"></SideBar>
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
          </MainContent>
          <RightSideBar />
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default HomeScreen;
