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
  outline: none;
  border: 0.5px solid #515151;
  border-radius: 5px;
  font-size: 15px;
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
  font-size: 12px;
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
`;
