import React from "react";
import { LSideBarContainer } from "../common/Common.styles";
import {
  SideBarItem,
  SideBarItemText,
  SideBarItemIcon,
} from "./SideBar.styles";
const sideData = [
  {
    title: "Dashboard",
    link: "/",
    icon: "/images/navbar/defaultuser.svg",
    selected: true,
  },
  {
    title: "Blogs",
    link: "/admin/blogs",
    icon: "/images/sidebar/blogs.svg",
    selected: false,
  },
  {
    title: "Career Aware",
    link: "/admin/career-aware",
    icon: "/images/sidebar/careeraware.svg",
    selected: false,
  },
  {
    title: "Find PG",
    link: "/admin/find-pg",
    icon: "/images/sidebar/findpg.svg",
    selected: false,
  },
  {
    title: "Easy Buy",
    link: "/admin/easy-buy",
    icon: "/images/sidebar/easybuy.svg",
    selected: false,
  },
];

const SideBar = (props) => {
  return (
    <LSideBarContainer>
      {sideData.map((item) => {
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
