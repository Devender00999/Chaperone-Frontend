import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { LSideBarContainer } from "../common/Common/Common.styles";
import {
  SideBarItem,
  SideBarItemText,
  SideBarItemIcon,
} from "./SideBar.styles";

const SideBar = (props) => {
  const { setTitle } = props;
  const location = useLocation();
  const { pathname } = location;
  const unknownLink = pathname === "/not-found" || pathname === "/unauthorised";

  useEffect(() => {
    if (unknownLink) setTitle("");
  });
  return (
    <LSideBarContainer>
      {props.sideData.map((item, id) => {
        return (
          <SideBarItem
            key={id}
            selected={pathname === item.link}
            to={item.link}
            onClick={() => setTitle(item.title)}
          >
            <SideBarItemIcon
              src={item.icon}
              style={{
                opacity: pathname === item.link ? 1 : 0.5,
              }}
            />
            <SideBarItemText selected={pathname === item.link}>
              {item.title}
            </SideBarItemText>
          </SideBarItem>
        );
      })}
    </LSideBarContainer>
  );
};

export default SideBar;
