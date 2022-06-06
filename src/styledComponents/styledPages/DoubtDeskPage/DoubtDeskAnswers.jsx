import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

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
import RightSideBar from "../../SidePanel/RightSideBar";
import {
   DoubtAnswerContainer,
   DoubtForm,
   DoubtInput,
   DoubtInputBox,
   DoubtInputLabel,
} from "./DoubtDeskPage.styles";
import * as doubtdeskActions from "../../../store/doubtdesk";
import getUserDetails from "../../../requests/decode/decodeToken";
import { toast } from "react-toastify";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Loader from "../../../components/Loader/Loader";



const DoubtDeskAnswers = (props) => {
   // const [data, setData] = useState({
   //    question: "How to create custom tooltip in CSS?",
   //    askedBy: "Devender Kumar",
   //    views: 3,
   //    answers: [
   //       {
   //          name: "Kushdeep Walia",
   //          answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   //  import java.util.Scanner;\n
   //  public class Main {\n\n
   //  public static void main(String [] args) {
   //  Scanner sc=new Scanner (System.in);
   //  System.out.println("Enter any two numbers: ");
   //  int a,b,c;
   //  a=sc.nextInt();
   //  b=sc.nextInt();
   //  c=a+b;
   //  System.out.println("The sum = "+c);
   //  }
   //  }`,
   //       },
   //       {
   //          name: "Deepak Kumar",
   //          answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas...`,
   //       },
   //       {
   //          name: "Jasveen Kaur",
   //          answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas...`,
   //       },
   //    ],
   //    postedTime: "",
   //    tags: ["HTML", "CSS", "React"],
   // });
   const [answer, setAnswer] = useState("");
   const [selectedAnswer, setSelectedAnswer] = useState(null);

   const { id } = useParams();
   const selectedDoubt = useSelector((state) => state.doubtdesk.selectedDoubt);
   const loading = useSelector((state) => state.doubtdesk.loading);
   const error = useSelector((state) => state.doubtdesk.error);
   const dispatch = useDispatch();
   const user = getUserDetails();

   useEffect(() => {
      if (id) dispatch(doubtdeskActions.selectDoubt(id));
   }, [dispatch, id]);
   useEffect(() => {
      if (error && !loading) {
         if (error.message.includes(`"answer" is not allowed to be empty`))
            toast.error("Please write answer before submitting.");
      }
   }, [error, loading]);

   const handleSubmit = (e) => {
      e.preventDefault();
      const newAnswer = {
         answer,
         authorId: user._id,
      };
      dispatch(doubtdeskActions.addAnswer(id, newAnswer));
      setAnswer("");
   };

   const handleAnswerDelete = (answerId) => {
      dispatch(doubtdeskActions.removeAnswer(id, answerId));
   };

   return loading ? (
      <Loader />
   ) : selectedDoubt ? (
      <>
         <MainContent direction="column" flex={3}>
            <PageHeading>Doubt Desk / Ask a Question</PageHeading>
            {/* <Search width="100%" query></Search> */}
            <DoubtQuestion style={{ margin: "20px 0" }}>
               Q. {selectedDoubt.question}
            </DoubtQuestion>
            {selectedDoubt.answers.map((answer, key) => (
               <DoubtAnswerContainer
                  key={key}
                  style={{ position: "relative" }}
                  onMouseOver={() => setSelectedAnswer(answer._id)}
                  onMouseOut={() => setSelectedAnswer(null)}
               >
                  <DoubtAskBy style={{ fontSize: "15px", fontWeight: 400 }}>
                     answered by {answer.answeredBy.name}
                  </DoubtAskBy>
                  <DoubtAnswer
                     dangerouslySetInnerHTML={{ __html: answer.answer }}
                  ></DoubtAnswer>
                  {user._id === answer.answeredBy._id && (
                     <DeleteOutlineIcon
                        onClick={() => handleAnswerDelete(answer._id)}
                        style={{
                           display:
                              selectedAnswer === answer._id ? "block" : "none",
                           position: "absolute",
                           top: "10px",
                           right: "10px",
                           width: "25px",
                           color: "#f60",
                           cursor: "pointer",
                        }}
                     />
                  )}
               </DoubtAnswerContainer>
            ))}
            <DoubtAnswerContainer>
               <DoubtForm style={{ margin: 0 }} onSubmit={handleSubmit}>
                  <Heading
                     style={{ margin: "10px 0 25px 0px", fontSize: "18px" }}
                  >
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
                     onClick={handleSubmit}
                     style={{ margin: "0 0 20px 0", alignSelf: "flex-start" }}
                     type="submit"
                  >
                     Submit Answer
                  </PrimaryButton>
               </DoubtForm>
            </DoubtAnswerContainer>
         </MainContent>
         <RightSideBar  />
      </>
   ) : null;
};

export default DoubtDeskAnswers;
