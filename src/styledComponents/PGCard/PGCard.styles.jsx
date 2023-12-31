import styled from "styled-components";

export const PGContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PGFeature = styled.p`
  background: #f6f6f6;
  color: #666666;
  border-radius: 20px;
  font-size: 0.75rem;
  padding: 0.5rem 1.25rem;
  margin-right: 1rem;
  margin-bottom: 0;
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  width: fit-content;
`;

export const PGTag = styled.div`
  width: 80px;
  height: 28px;
  background-color: #000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0 2px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const PGTagImage = styled.img``;

export const PGTagText = styled.p`
  color: #ffffff;
  font-family: Poppins;
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0;
`;
