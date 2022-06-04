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
} from "./DoubtDeskPage.styles";

import InputTags from "../../InputTags";

const rightSideBarData = {
   heading: "Other Section",
   content: ["New Questions", "My Questions", "My Answers", "Ask a Question"],
};

const DoubtDeskPage = (props) => {
   const [question, setQuestion] = useState("");

   const [questionTags, setQuestionTags] = useState([]);

   const handleSubmit = () => {
      console.log(question, questionTags);
   };

   return (
      <Content>
         <MainContent direction="column" flex={3}>
            <PageHeading>Doubt Desk / Ask a Question</PageHeading>
            <DoubtForm>
               <DoubtInputBox>
                  <DoubtInputLabel>Question</DoubtInputLabel>
                  <DoubtInput
                     rows={5}
                     value={question}
                     placeholder="Please write your question here"
                     onChange={(e) => setQuestion(e.target.value)}
                  ></DoubtInput>
               </DoubtInputBox>
               <DoubtInputBox>
                  <DoubtInputLabel>Tags</DoubtInputLabel>
                  <InputTags tags={questionTags} setTags={setQuestionTags} />
               </DoubtInputBox>

               <PrimaryButton
                  style={{ alignSelf: "flex-start", marginTop: 0 }}
                  type="submit"
                  onClick={handleSubmit}
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
