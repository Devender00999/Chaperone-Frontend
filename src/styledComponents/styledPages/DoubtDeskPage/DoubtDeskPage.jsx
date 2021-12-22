import React, { useState } from "react";
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
  DoubtInputTag,
  DoubtInputTags,
  InputDelete,
  InputTags,
} from "./DoubtDeskPage.styles";

const rightSideBarData = {
  heading: "Other Section",
  content: ["New Questions", "My Questions", "My Answers", "Ask a Question"],
};

const DoubtDeskPage = (props) => {
  const [list, setList] = useState([]);
  const handleAdd = (e) => {
    if (e.keyCode === 13) {
      setList([...list, e.target.value]);
      e.target.value = "";
    }
  };
  const handleBack = (e) => {
    if (e.keyCode === 8 && e.target.value === "") {
      setList([...list.slice(0, list.length - 1)]);
      e.target.value = "";
    }
  };
  const handleDelete = (item) => {
    setList(list.filter((element) => element !== item));
  };
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
                <DoubtInputTags>
                  {list.map((item, key) => (
                    <InputTags key={key}>
                      {item}
                      <InputDelete
                        src="/images/common/delete-cross.svg"
                        onClick={() => handleDelete(item)}
                      />
                    </InputTags>
                  ))}

                  <DoubtInputTag
                    onKeyUp={handleAdd}
                    onKeyDown={handleBack}
                    rows={1}
                    type="text"
                  />
                </DoubtInputTags>
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
