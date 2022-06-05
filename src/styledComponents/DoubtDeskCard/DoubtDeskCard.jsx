import Moment from "moment";
import React from "react";
import { StyledTags } from "../common/Common/Common";
import {
   DoubtAskBy,
   DoubtCard,
   DoubtAskBySection,
   DoubtQuestion,
   DoubtQuestionContainer,
   DoubtStatus,
   DoubtStatusCard,
   DoubtStatusNumber,
   DoubtStatusType,
} from "./DoubtDeskCard.styles";

const DoubtDeskCards = ({ doubt }) => {
   const calculateTime = (time) => {
      const createdTime = Moment(new Date(time));
      const currentTime = Moment();
      const minutes = currentTime.diff(createdTime, "minutes");
      const seconds = currentTime.diff(createdTime, "seconds");
      const hours = currentTime.diff(createdTime, "hours");
      const days = currentTime.diff(createdTime, "days");
      const months = currentTime.diff(createdTime, "months");
      const years = currentTime.diff(createdTime, "years");
      if (seconds < 60) return `${seconds} seconds ago.`;
      if (minutes < 60) return `${minutes} minutes ago.`;
      if (hours < 24) return `${hours} hours ago.`;
      if (days < 30) return `${days} days ago.`;
      if (months < 12) return `${months} months ago.`;
      if (years < 2) return `${years} year ago.`;
      return `${years} years ago.`;
   };
   return (
      <DoubtCard to={doubt._id}>
         <DoubtStatus>
            <DoubtStatusCard>
               <DoubtStatusNumber>{doubt.views}</DoubtStatusNumber>
               <DoubtStatusType>Views</DoubtStatusType>
            </DoubtStatusCard>
            <DoubtStatusCard>
               <DoubtStatusNumber>{doubt.answers.length}</DoubtStatusNumber>
               <DoubtStatusType>Answers</DoubtStatusType>
            </DoubtStatusCard>
         </DoubtStatus>
         <DoubtQuestionContainer>
            <DoubtQuestion>Q. {doubt.question}</DoubtQuestion>
            <DoubtAskBySection>
               asked by <DoubtAskBy> {doubt.author.name}</DoubtAskBy>{" "}
               {calculateTime(doubt.createdAt)}
            </DoubtAskBySection>
            <StyledTags
               data={doubt.tags}
               color="#FF6600"
               bColor="#FFCA7D80"
            ></StyledTags>
         </DoubtQuestionContainer>
      </DoubtCard>
   );
};

export default DoubtDeskCards;
