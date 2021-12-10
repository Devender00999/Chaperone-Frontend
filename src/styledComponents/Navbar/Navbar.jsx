import React from "react";
import {
  NavbarContainer,
  NavbarSearchContainer,
  NavLogo,
  NavNotification,
  NavUser,
  NavUserImage,
  NavUserName,
} from "./Navbar.styles";
import NavbarSearh from "./Search";
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLogo src="/images/navbar/logo.svg" />
      <NavbarSearchContainer>
        <NavbarSearh style={{ width: "75%" }} />
      </NavbarSearchContainer>
      <NavUser>
        <NavNotification src="/images/navbar/notifications.svg" />
        <NavUserImage src="/images/navbar/defaultuser.svg" />
        <NavUserName>Devender Kumar</NavUserName>
      </NavUser>
    </NavbarContainer>
  );
};

export default Navbar;
