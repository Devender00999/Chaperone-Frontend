import React from "react";
import {
  NavbarContainer,
  NavbarSearchContainer,
  NavLogo,
  // NavNotification,
  UserDetails,
} from "./Navbar.styles";
import Search from "./Search";
import User from "../common/User/User";
import { Link } from "react-router-dom";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
const Navbar = () => {
  return (
    <NavbarContainer>
      <Link style={{ flex: 1, display: "flex" }} to="/">
        <NavLogo src="/images/navbar/logo.svg" />
      </Link>
      <NavbarSearchContainer>
        <Search width={"75%"} />
      </NavbarSearchContainer>
      <UserDetails>
        {/* <NavNotification src="/images/navbar/notifications.svg" /> */}

        <CustomDropdown
          Toggle={
            <User name="Deepak Kumar" image="/images/navbar/defaultuser.svg" />
          }
          Menu={<UserOptions />}
          float={"left"}
          width={150}
        ></CustomDropdown>
      </UserDetails>
    </NavbarContainer>
  );
};

export default Navbar;
const UserOptions = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>Edit Profile</div>
      <hr style={{ margin: 0 }} />
      <div style={{ textAlign: "center" }}>Logout</div>
    </>
  );
};
