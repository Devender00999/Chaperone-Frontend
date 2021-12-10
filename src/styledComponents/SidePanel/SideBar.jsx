import React from "react";
import { LSideBarContainer } from "../common/Common.styles";
import {
  SideBarItem,
  SideBarItemText,
  SideBarItemIcon,
} from "./SideBar.styles";

const SideBar = (props) => {
  return (
    <LSideBarContainer>
      {props.sideData.map((item) => {
        return (
          <SideBarItem selected={props.title === item.title} to={item.link}>
            <SideBarItemIcon src={item.icon} />
            <SideBarItemText selected={props.title === item.title}>
              {item.title}
            </SideBarItemText>
          </SideBarItem>
        );
      })}
    </LSideBarContainer>
  );
};

export default SideBar;
