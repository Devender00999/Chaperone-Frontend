import styled from "styled-components";

export const Select = styled.select`
  min-width: 125px;
  padding: 8px 35px 8px 20px;
  border-radius: 10px;
  color: ${(props) => (props.selected === true ? "white " : "black")};
  background-color: ${(props) => (props.selected ? "#ff6600" : "#F6F6F6")};
  -webkit-appearance: none;
  font-size: 14px;
  -moz-appearance: none;
  appearance: none;
  background-image: ${(props) =>
    props.selected
      ? " url(/images/common/uparrow.svg)"
      : "url(/images/common/uparrowblack.svg)"};
  background-position: calc(100% - 15px) 16px;
  background-size: 10px, 10px;
  background-repeat: no-repeat;
  outline: none;
  border: 0;
  &:active {
    border-radius: 10px 10px 0 0;
  }
`;

export const Option = styled.option`
  background: white;
  color: black;
  display: flex;
  border: none;
  padding: 8px 20px;
`;

export const SelectTags = styled.div`
  display: flex;
  width: 100%;
  column-gap: 20px;
  margin: 10px 0;
  justify-content: flex-startjustify-content;
`;
