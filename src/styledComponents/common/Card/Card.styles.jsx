import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 1rem 0;
  border: 1px solid rgba(102, 102, 102, 0.6);
  box-sizing: border-box;
  border-radius: 2px;
  position: relative;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const CardData = styled.div`
  padding: 1.5rem 1.5rem 1rem;

  display: flex;
  flex-direction: column;
`;

export const CardHeading = styled.h3`
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 400;
`;

export const CardDesc = styled.p`
  font-family: Poppins;
  font-size: 0.875rem;
  color: #666666;
`;
