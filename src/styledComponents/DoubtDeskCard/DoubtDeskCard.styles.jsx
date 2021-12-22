import styled from "styled-components";
// import { Link } from "react-router-dom";

export const DoubtCardContainer = styled.div``;

export const DoubtCard = styled.div`
  display: flex;
  padding: 10px 0;
  margin: 10px 0;
`;

export const DoubtStatus = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;
export const DoubtStatusCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  align-items: center;
  border: 1px solid #cacaca;
  width: 70px;
  height: max-content;
  &:last-child {
    border-left: none;
  }
`;

export const DoubtStatusNumber = styled.p`
  color: #666666;
  font-size: 15px;
  margin-bottom: 0;
`;
export const DoubtStatusType = styled.p`
  color: #666666;
  font-size: 10px;
  margin-bottom: 0;
`;

export const DoubtQuestionContainer = styled.div`
  flex: 3;
`;
export const DoubtQuestion = styled.h3`
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  margin-bottom: 0;
`;
export const DoubtAskBySection = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  color: #515151;
`;

export const DoubtAskBy = styled.span`
  color: #ff6600;
  font-weight: 300;
`;
