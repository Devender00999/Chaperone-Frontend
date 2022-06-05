import React, { useEffect, useState } from "react";
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
import Alert from "@mui/material/Alert";

import InputTags from "../../InputTags";
import * as doubtdeskActions from "../../../store/doubtdesk";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import getUserDetails from "../../../requests/decode/decodeToken";

const rightSideBarData = {
   heading: "Other Section",
   content: ["New Questions", "My Questions", "My Answers", "Ask a Question"],
};

const DoubtDeskPage = (props) => {
   const [question, setQuestion] = useState("");
   const [questionTags, setQuestionTags] = useState([]);
   const [error, setError] = useState(null);
   const [apiCalled, setApiCalled] = useState(false);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const user = getUserDetails();

   const selectedDoubt = useSelector((state) => state.doubtdesk.selectedDoubt);
   console.log(selectedDoubt);
   const { id } = useParams();
   useEffect(() => {
      if (id && !apiCalled) {
         dispatch(doubtdeskActions.selectDoubt(id));
         setApiCalled(true);
      }
      if (selectedDoubt) {
         setQuestion(selectedDoubt.question);
         setQuestionTags(selectedDoubt.tags);
      }
   }, [dispatch, selectedDoubt]);

   const handleSubmit = async () => {
      let result;
      const data = {
         authorId: user._id,
         question,
         tags: questionTags,
      };
      if (id) {
         result = await dispatch(doubtdeskActions.editDoubt(id, data));
      } else {
         result = await dispatch(doubtdeskActions.addDoubt(data));
      }
      if (result.status === 200) {
         navigate("/dashboard/doubt-desk");
      }
      setError(result.data);
   };

   return (
      <Content>
         <MainContent direction="column" flex={3}>
            <PageHeading>Doubt Desk / Ask a Question</PageHeading>
            <DoubtForm>
               {error && (
                  <Alert style={{ marginBottom: "30px" }} severity="error">
                     {error.message}
                  </Alert>
               )}
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
