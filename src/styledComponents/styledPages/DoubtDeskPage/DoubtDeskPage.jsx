import React from "react";
import {
  Content,
  MainContent,
  PageHeading,
  PrimaryButton,
  StyledContainer,
  StyledMain,
} from "../../common/Common/Common.styles";
import Navbar from "../../Navbar/Navbar";
import RightSideBar from "../../SidePanel/RightSideBar";
import SideBar from "../../SidePanel/SideBar";
import {
  DoubtForm,
  DoubtInput,
  DoubtInputBox,
  DoubtInputLabel,
  InputDelete,
  InputTags,
} from "./DoubtDeskPage.styles";

const rightSideBarData = {
  heading: "Other Section",
  content: ["New Questions", "My Questions", "My Answers", "Ask a Question"],
};
const DoubtDeskPage = (props) => {
  return (
    <StyledContainer>
      <Navbar />
      <StyledMain>
        <SideBar sideData={props.sideData} title="Doubt Desk"></SideBar>{" "}
        <Content>
          <MainContent direction="column" flex={3}>
            <PageHeading>Doubt Desk / Ask a Question</PageHeading>
            <DoubtForm>
              <DoubtInputBox>
                <DoubtInputLabel>Question</DoubtInputLabel>
                <DoubtInput
                  rows={5}
                  placeholder="Please write your question here"
                ></DoubtInput>
              </DoubtInputBox>
              <DoubtInputBox>
                <DoubtInputLabel>Tags</DoubtInputLabel>
                <DoubtInput
                  rows={3}
                  placeholder="Please write your question here"
                ></DoubtInput>
              </DoubtInputBox>
              <PrimaryButton
                style={{ alignSelf: "flex-start", marginTop: 0 }}
                type="submit"
              >
                Post Doubt
              </PrimaryButton>
            </DoubtForm>
          </MainContent>
          <RightSideBar {...rightSideBarData} />
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default DoubtDeskPage;
