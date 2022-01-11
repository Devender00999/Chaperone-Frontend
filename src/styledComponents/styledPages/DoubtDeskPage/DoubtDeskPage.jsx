import React, { useState } from "react";
import {
  Content,
  MainContent,
  PageHeading,
  PrimaryButton,
} from "../../common/Common/Common.styles";
import RightSideBar from "../../SidePanel/RightSideBar";
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
  const [questionData, setQuestionData] = useState({
    question: "",
    questionTags: [],
  });

  const handleAdd = (e) => {
    if (e.keyCode === 13) {
      const data = e.target.value;
      setQuestionData((prevState) => ({
        ...prevState,
        questionTags: [...prevState.questionTags, data],
      }));
      e.target.value = "";
    }
  };
  const handleBack = (e) => {
    if (e.keyCode === 8 && e.target.value === "") {
      setQuestionData((prevState) => ({
        ...prevState,
        questionTags: [
          ...prevState.questionTags.slice(0, prevState.questionTags.length - 1),
        ],
      }));
      e.target.value = "";
    }
  };
  const handleDelete = (item) => {
    setQuestionData((prevState) => ({
      ...prevState,
      questionTags: prevState.questionTags.filter(
        (element) => element !== item
      ),
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(questionData);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setQuestionData((prevState) => {
      return {
        ...prevState,
        question: value,
      };
    });
  };
  return (
    <Content>
      <MainContent direction="column" flex={3}>
        <PageHeading>Doubt Desk / Ask a Question</PageHeading>
        <DoubtForm onSubmit={handleSubmit}>
          <DoubtInputBox>
            <DoubtInputLabel>Question</DoubtInputLabel>
            <DoubtInput
              rows={5}
              value={questionData.question}
              placeholder="Please write your question here"
              onChange={handleChange}
            ></DoubtInput>
          </DoubtInputBox>

          <DoubtInputBox>
            <DoubtInputLabel>Tags</DoubtInputLabel>
            <DoubtInputTags>
              {questionData.questionTags.map((item, key) => (
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
  );
};

export default DoubtDeskPage;
