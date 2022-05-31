import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { LSideBarContainer } from "../common/Common/Common.styles";
import {
  SideBarItem,
  SideBarItemText,
  SideBarItemIcon,
} from "./SideBar.styles";

const SideBar = (props) => {
  const getTitle = (item) => {
    if (
      (pathname === "/dashboard" || pathname === "/admin") &&
      (item.title === "Home" || item.title === "Dashboard")
    )
      return true;
    return (
      pathname.startsWith(item.link) &&
      item.title !== "Home" &&
      item.title !== "Dashboard"
    );
  };
  const { setTitle } = props;
  const { pathname } = useLocation();
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
            selected={getTitle(item)}
            to={item.link}
            onClick={() => setTitle(item.title)}
          >
            <SideBarItemIcon
              src={item.icon}
              style={{
                opacity: getTitle(item) ? 1 : 0.5,
              }}
            />
            <SideBarItemText selected={getTitle(item)}>
              {item.title}
            </SideBarItemText>
          </SideBarItem>
        );
      })}
    </LSideBarContainer>
  );
};

export default SideBar;
