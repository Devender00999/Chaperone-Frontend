import React from "react";
import { useLocation } from "react-router-dom";

import { LSideBarContainer } from "../common/Common/Common.styles";
import {
  SideBarItem,
  SideBarItemText,
  SideBarItemIcon,
} from "./SideBar.styles";

const SideBar = (props) => {
  const { title, setTitle } = props;
  const location = useLocation();
  const unknownLink =
    location.pathname === "/not-found" || location.pathname === "/unauthorised";
  if (unknownLink) setTitle("");
  return (
    <LSideBarContainer>
      {props.sideData.map((item, id) => {
        return (
          <SideBarItem
            key={id}
            selected={title === item.title}
            to={item.link}
            onClick={() => setTitle(item.title)}
          >
            <SideBarItemIcon
              src={item.icon}
              style={{ opacity: title === item.title ? 1 : 0.5 }}
            />
            <SideBarItemText selected={title === item.title}>
              {item.title}
            </SideBarItemText>
          </SideBarItem>
        );
      })}
    </LSideBarContainer>
  );
};

export default SideBar;
