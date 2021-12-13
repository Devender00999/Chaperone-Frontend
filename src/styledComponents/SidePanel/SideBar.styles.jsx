import { Link } from "react-router-dom";

import styled from "styled-components";

export const SideBarItem = styled(Link)`
  padding: 10px 15px;
  width: 175px;
  margin-bottom: 5px;
  text-decoration: none;
  display: flex;
  align-items: start;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "#f6f6f6" : "white")};
  justify-content: left;
`;

export const SideBarItemIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;
export const SideBarItemText = styled.p`
  font-family: "Poppins" !important;
  font-size: 16px;
  margin: 0;
  color: ${(props) => (props.selected ? "#000" : "#797979")};
  line-height: 1.2;
`;

export const SideBarHeading = styled.p`
  color: #ff6600;
  font-family: "Poppins";
  width: 100%;
  margin-bottom: 5px;
`;

export const SideBarList = styled.ul`
  margin-bottom: 5px;
  padding-left: 0;
  list-style-type: none;
`;

export const SideBarListItem = styled.li`
  margin-bottom: 5px;
  color: #666666;
  font-family: "Poppins";
  font-size: 13px;
  width: 100%;
`;

// Right Sidebar
