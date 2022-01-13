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
import { DropdownButton, Dropdown } from "react-bootstrap";
const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

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
        {/* <CustomDropdown
          Toggle={
            <User name="Deepak Kumar" image="/images/navbar/defaultuser.svg" />
          }
          Menu={UserOptions}
          float={"left"}
          width={150}
          showMenu={showMenu}
          setShowMenu={setShowMenu} 
        ></CustomDropdown>*/}
        <DropdownButton
          drop={"start"}
          variant="none"
          title={
            <User name="Deepak Kumar" image="/images/navbar/defaultuser.svg" />
          }
        >
          <Dropdown.Item className="py-2">Edit Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="py-2" eventKey="1">
            {user && user.isAdmin && (
              <Link
                style={{ color: "#212529", textDecoration: "none" }}
                to="/admin"
              >
                Admin Portal
              </Link>
            )}
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className="py-2"
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/";
            }}
          >
            Logout
          </Dropdown.Item>
        </DropdownButton>
      </UserDetails>
    </NavbarContainer>
  );
};

export default Navbar;
