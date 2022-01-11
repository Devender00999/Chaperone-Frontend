import React from "react";
import {
  Content,
  MainContent,
  PageHeading,
} from "../styledComponents/common/Common/Common.styles";
import RightSideBar from "../styledComponents/SidePanel/RightSideBar";
import Search from "../styledComponents/Navbar/Search";
import DoubtDeskCards from "../styledComponents/DoubtDeskCard/DoubtDeskCard";
import { doubtsData } from "../data/doubt";
const DoubtDesk = (props) => {
  const rightSideBarData = {
    heading: "Other Section",
    content: ["New Questions", "My Questions", "My Answers", "Ask a Question"],
  };
  return (
    <Content>
      <MainContent direction="column" flex={3}>
        <PageHeading>Doubt Desk</PageHeading>
        <Search width="100%"></Search>
        <DoubtDeskCards data={doubtsData} />
      </MainContent>
      <RightSideBar {...rightSideBarData} />
    </Content>
  );
};

export default DoubtDesk;
