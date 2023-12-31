import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  padding: 15px 40px;
  flex-direction: column;
  font-family: "Mulish", sans-serif;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 10px;
  top: 50%;
  opacity: 0.5;
  transform: translateY(-10%);
  margin: auto;
`;

export const Input = styled.input`
  padding: 10px 20px 10px 40px;
  margin-top: 15px;
  font-size: 16px;
  width: 500px;
  font-family: "Mulish", sans-serif;

  border: 1px solid #cacaca;
  border-radius: 5px;
  outline: none;
`;

export const FormHeading = styled.h2`
  margin: 10px 0;
`;
export const FormText = styled.p`
  margin-bottom: 8px;
`;
export const FormLinkText = styled.span`
  color: #ff6600;
  font-family: "Poppins";
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
  margin-left: 5px;
  cursor: pointer;
`;
export const FormLink = styled.a`
  color: #ff6600;
  text-decoration: none;
  margin: 5px;
`;

export const FormInputContainer = styled.div`
  position: relative;
`;

export const FormShowPassword = styled.img`
  width: 22px;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-15%);
  margin: auto;
  cursor: pointer;
`;
