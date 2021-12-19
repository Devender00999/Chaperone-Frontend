import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 1rem 0;
  border: 1px solid rgba(102, 102, 102, 0.6);
  box-sizing: border-box;
  border-radius: 2px;
  position: relative;
`;

export const CardImage = styled.div`
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
