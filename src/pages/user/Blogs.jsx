import React from "react";
import { MainContent } from "../../styledComponents/common/Common/Common.styles";
import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
import BlogPage from "../../styledComponents/styledPages/BlogPage/BlogPage";

const Blogs = (props) => {
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
    <>
      <MainContent direction="column" flex={3}>
        <BlogPage />
      </MainContent>
      <RightSideBar {...rightSideBarData} />
    </>
  );
};

export default Blogs;