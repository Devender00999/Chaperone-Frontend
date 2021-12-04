import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  padding: 15px 40px;
  flex-direction: column;
  font-family: "Mulish", sans-serif;
`;

const Input = styled.input`
  padding: 10px 15px;
  margin-top: 15px;
  font-size: 16px;
  width: 500px;
  font-family: "Mulish", sans-serif;

  border: 1px solid #cacaca;
  border-radius: 5px;
  outline: none;
`;

const FormHeading = styled.h2`
  margin: 10px 0;
`;
const FormText = styled.p`
  margin-bottom: 8px;
`;
const FormLink = styled.a`
  color: #ff6600;
  text-decoration: none;
  margin: 5px;
`;

const FormButton = styled.button`
  width: 150px;
  padding: 10px 0;
  align-self: center;
  font-size: 16px;
  background: #ff6600;
  font-weight: bolder;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
`;
export { FormContainer, Input, FormHeading, FormLink, FormText, FormButton };
