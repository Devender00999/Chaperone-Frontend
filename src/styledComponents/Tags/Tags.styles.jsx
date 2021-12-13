import styled, { css } from "styled-components";

export const TagContainer = styled.div`
  display: flex;
  margin: 0 2rem;
`;

export const Tag = styled.button`
  width: max-content;
  padding: 10px 20px;
  font-family: Poppins;
  font-weight: normal;
  font-size: 0.8125rem;
  margin-right: 1rem;
  background: #f6f6f6;
  color: #202223;
  border-radius: 0.625rem;
  border: 0;
  cursor: pointer;
  ${(props) =>
    props.selected &&
    css`
      background: #ff6600;
      color: #fff;
    `}
`;
