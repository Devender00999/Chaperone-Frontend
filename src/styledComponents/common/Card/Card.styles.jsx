import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 1rem 0;
  border: 1px solid rgba(102, 102, 102, 0.6);
  box-sizing: border-box;
  border-radius: 2px;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const CardData = styled.div`
  padding: 1.5rem;
`;

export const CardHeading = styled.h3`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
`;

export const CardDesc = styled.p`
  font-family: Poppins;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: #666666;
`;
