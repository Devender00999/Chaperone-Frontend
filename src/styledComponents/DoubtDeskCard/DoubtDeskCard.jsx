import React from "react";
import { StyledTags } from "../common/Common/Common";
import {
  DoubtAskBy,
  DoubtCard,
  DoubtAskBySection,
  DoubtCardContainer,
  DoubtQuestion,
  DoubtQuestionContainer,
  DoubtStatus,
  DoubtStatusCard,
  DoubtStatusNumber,
  DoubtStatusType,
} from "./DoubtDeskCard.styles";

const DoubtDeskCards = (props) => {
  return (
    <DoubtCardContainer>
      {props.data.map((doubt, key) => (
        <DoubtCard key={key} to={"asdfasdf"}>
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
              asked by <DoubtAskBy> {doubt.askedBy}</DoubtAskBy> 5 mins ago
            </DoubtAskBySection>
            <StyledTags
              data={doubt.tags}
              color="#FF6600"
              bColor="#FFCA7D80"
            ></StyledTags>
          </DoubtQuestionContainer>
        </DoubtCard>
      ))}
    </DoubtCardContainer>
  );
};

export default DoubtDeskCards;
