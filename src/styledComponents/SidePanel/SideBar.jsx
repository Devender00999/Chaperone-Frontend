import React from "react";
import { LSideBarContainer } from "../common/Common/Common.styles";
import {
  SideBarItem,
  SideBarItemText,
  SideBarItemIcon,
} from "./SideBar.styles";

const SideBar = (props) => {
  return (
    <LSideBarContainer>
      {props.sideData.map((item, id) => {
        return (
          <SideBarItem
            key={id}
            selected={props.title === item.title}
            to={item.link}
          >
            <SideBarItemIcon
              src={item.icon}
              style={{ opacity: props.title === item.title ? 1 : 0.5 }}
            />
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
