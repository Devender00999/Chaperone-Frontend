import styled from "styled-components";
export const DoubtForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
`;

export const DoubtInputBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 30px;
`;
export const DoubtInput = styled.textarea`
  padding: 10px 20px;
  resize: none;

  outline: none;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 15px;
`;

export const DoubtInputTags = styled.div`
  padding: 10px 20px;
  outline: none;
  border: 1px solid #ced4da;
  border-radius: 5px;
  display: flex;
  width: 100%;
  min-height: 100px;
  font-size: 15px;
  flex-wrap: wrap; ;
`;
export const DoubtInputTag = styled.input`
  border: none;
  outline: none;
  height: max-content;
  width: 100px;
  padding: 5px 0;
`;

export const DoubtInputLabel = styled.label`
  font-size: 13px;
  position: absolute;
  top: -10px;
  left: 15px;
  padding: 0 5px;
  color: #515151;
  background: white;
`;

export const InputTags = styled.span`
  background: rgba(255, 202, 125, 0.5);
  padding: 3px 15px;
  margin: 5px;
  margin-left: 0;
  font-size: 12px;
  height: max-content;
  color: #ff6600;
  width: max-content;
  display: flex;
  align-items: center;
  border-radius: 18px;
`;

export const InputDelete = styled.img`
  width: 9px;
  margin-left: 10px;
  height: 9px;
  cursor: pointer;
`;

export const DoubtAnswerContainer = styled.div`
  padding: 10px 0;
  border: none;
  border-top: 1px solid #cacaca;
`;
