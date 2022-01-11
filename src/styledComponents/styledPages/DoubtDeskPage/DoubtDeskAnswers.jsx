import React, { useState } from "react";
import {
  Heading,
  MainContent,
  PageHeading,
  PrimaryButton,
} from "../../common/Common/Common.styles";
import {
  DoubtAnswer,
  DoubtAskBy,
  DoubtQuestion,
} from "../../DoubtDeskCard/DoubtDeskCard.styles";
import Search from "../../Navbar/Search";
import RightSideBar from "../../SidePanel/RightSideBar";
import {
  DoubtAnswerContainer,
  DoubtForm,
  DoubtInput,
  DoubtInputBox,
  DoubtInputLabel,
} from "./DoubtDeskPage.styles";

const rightSideBarData = {
  heading: "Other Section",
  content: ["New Questions", "My Questions", "My Answers", "Ask a Question"],
};

const DoubtDeskAnswers = (props) => {
  const [data, setData] = useState({
    question: "How to create custom tooltip in CSS?",
    askedBy: "Devender Kumar",
    views: 3,
    answers: [
      {
        name: "Kushdeep Walia",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    import java.util.Scanner;\n
    public class Main {\n\n
    public static void main(String [] args) {
    Scanner sc=new Scanner (System.in);
    System.out.println("Enter any two numbers: ");
    int a,b,c;
    a=sc.nextInt();
    b=sc.nextInt();
    c=a+b;
    System.out.println("The sum = "+c);
    }
    }`,
      },
      {
        name: "Deepak Kumar",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas...`,
      },
      {
        name: "Jasveen Kaur",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas...`,
      },
    ],
    postedTime: "",
    tags: ["HTML", "CSS", "React"],
  });
  const [answer, setAnswer] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevState) => ({
      ...prevState,
      answers: [...prevState.answers, { name: "Ravi", answer }],
    }));
    setAnswer("");
  };
  return (
    <>
      <MainContent direction="column" flex={3}>
        <PageHeading>Doubt Desk / Ask a Question</PageHeading>
        <Search width="100%" query></Search>
        <DoubtQuestion style={{ margin: "20px 0" }}>
          Q. {data.question}
        </DoubtQuestion>
        {data.answers.map((data, key) => (
          <DoubtAnswerContainer key={key}>
            <DoubtAskBy style={{ fontSize: "15px", fontWeight: 400 }}>
              answered by {data.name}
            </DoubtAskBy>
            <DoubtAnswer
              dangerouslySetInnerHTML={{ __html: data.answer }}
            ></DoubtAnswer>
          </DoubtAnswerContainer>
        ))}
        <DoubtAnswerContainer>
          <DoubtForm style={{ margin: 0 }} onSubmit={handleSubmit}>
            <Heading style={{ margin: "10px 0 25px 0px", fontSize: "18px" }}>
              Submit your Answer
            </Heading>
            <DoubtInputBox>
              <DoubtInputLabel>Answer</DoubtInputLabel>
              <DoubtInput
                rows={5}
                placeholder="Please type your answer here"
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
              ></DoubtInput>
            </DoubtInputBox>
            <PrimaryButton
              style={{ margin: "0 0 20px 0", alignSelf: "flex-start" }}
              type="submit"
            >
              Submit
            </PrimaryButton>
          </DoubtForm>
        </DoubtAnswerContainer>
      </MainContent>
      <RightSideBar {...rightSideBarData} />
    </>
  );
};

export default DoubtDeskAnswers;
