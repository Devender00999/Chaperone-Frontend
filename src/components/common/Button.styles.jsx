import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButtons = styled.button`
  height: 45px;
  width: 300px;
  font-size: 18px;
  border: 0.8px solid rgba(102, 102, 102, 0.6);
  border-radius: 2px;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #666666;
  margin: 10px 0;
`;

export const SecondaryButton = styled(Link)`
  font-size: 14px;
  width: max-content;
  margin: 10px 0;
  text-decoration: none;
  color: #ff6600;
  font-family: poppins;
  width: 150px;
  text-align: center;
  padding: 8px 20px;
  border-radius: 2px;
  border: 1px solid #cacaca;
  &:hover {
    color: #ff6600;
  }
`;

export const FormButton = styled.button`
  width: 150px;
  padding: 10px 0;
  align-self: center;
  font-size: 16px;
  background: #ff6600;
  font-weight: normal;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
`;
