import React, { useState } from "react";
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
import getUserDetails from "../../requests/decode/decodeToken";
import StyledModal from "../CustomModal/CustomModal";
import ProfileForm from "../Form/Profile";

const Navbar = () => {
  const user = getUserDetails();

  const [showModal, setShowModal] = useState(false);

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
            <User name={user.name} image="/images/navbar/defaultuser.svg" />
          }
        >
          <Dropdown.Item
            className="py-2"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            Edit Profile
          </Dropdown.Item>
          <Dropdown.Divider />
          {user.isAdmin && (
            <Dropdown.Item as={Link} to="/admin" className="py-2" eventKey="1">
              Admin Portal
            </Dropdown.Item>
          )}

          {user.isAdmin && <Dropdown.Divider />}

          <Dropdown.Item
            className="py-2"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            Logout
          </Dropdown.Item>
        </DropdownButton>
      </UserDetails>
      <StyledModal
        showModal={showModal}
        setShowModal={setShowModal}
        Component={<ProfileForm />}
      />
    </NavbarContainer>
  );
};

export default Navbar;
