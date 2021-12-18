import React from "react";
import {
  NavbarContainer,
  NavbarSearchContainer,
  NavLogo,
  NavNotification,
  UserDetails,
} from "./Navbar.styles";
import NavbarSearh from "./Search";
import User from "../common/User/User";
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLogo src="/images/navbar/logo.svg" />
      <NavbarSearchContainer>
        <NavbarSearh style={{ width: "75%" }} />
      </NavbarSearchContainer>
      <UserDetails>
        <NavNotification src="/images/navbar/notifications.svg" />
        <User name="Deepak Kumar" image="/images/navbar/defaultuser.svg" />
      </UserDetails>
    </NavbarContainer>
  );
};

export default Navbar;