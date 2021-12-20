import styled from "styled-components";
import { Link } from "react-router-dom";

export const SubjectContainer = styled.div`
  border: 1px solid #cacaca;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 1.5rem 1.75rem;
  margin-bottom: 1.125rem;
  width: 100%;
`;

export const SubjectTopics = styled.div`
  padding: 0.5rem 1.375rem 0;
`;

export const SubjectTopic = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TopicLink = styled(Link)`
  color: #ff6600;
  font-family: Poppins;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 20px;

  &:hover {
    color: #ff6600;
  }
`;
