import React from "react";
import BlogsCard from "../styledComponents/BlogsCard/BlogsCard";
import {
  Content,
  MainContent,
  StyledContainer,
  StyledMain,
} from "../styledComponents/common/Common/Common.styles";
import Navbar from "../styledComponents/Navbar/Navbar";
import SideBar from "../styledComponents/SidePanel/SideBar";
import RightSideBar from "../styledComponents/SidePanel/RightSideBar";

const FindPG = (props) => {
  const blogs = [
    {
      image: "/images/blogs/Image.svg",
      heading: "Complete Roadmap to Web Development 2021",
      desc: "Today there are so many languages and tools and frameworks. Which one should you learn? And for each, there are a ton of courses. Super confusing! We are here to give you full guidance...",
    },
  ];
  return (
    <StyledContainer id="container">
      <Navbar />
      <StyledMain className="main">
        <SideBar sideData={props.sideData} title="Find PG"></SideBar>
        <Content>
          <MainContent direction="column" flex={3}>
            {blogs.map((blog) => (
              <BlogsCard {...blog} />
            ))}
          </MainContent>
          <RightSideBar />
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default FindPG;
