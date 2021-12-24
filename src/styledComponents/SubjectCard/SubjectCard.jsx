import React from "react";
import { StyledLink } from "../common/Common/Common";
import { DescText, Heading } from "../common/Common/Common.styles";
import {
  SubjectContainer,
  SubjectTopic,
  SubjectTopics,
} from "./SubjectCard.styles";

const SubjectCard = (props) => {
  const { subject } = props;
  return (
    <SubjectContainer>
      <Heading>{subject.title}</Heading>
      <SubjectTopics>
        {subject.topics.map((topic, i) => (
          <SubjectTopic key={i}>
            <DescText style={{ margin: "0 0 0.5rem" }}>
              {topic.topicName}
            </DescText>
            <StyledLink link={topic.topicLink} title="View" />
          </SubjectTopic>
        ))}
      </SubjectTopics>
    </SubjectContainer>
  );
};

export default SubjectCard;
