/** @format */

import React, { useState } from "react";
import {
   NavbarContainer,
   NavbarSearchContainer,
   NavLogo,
   UserDetails,
} from "./Navbar.styles";
import Search from "./Search";
import User from "../common/User/User";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import getUserDetails from "../../requests/decode/decodeToken";
import StyledModal from "../CustomModal/CustomModal";
import ProfileForm from "../Form/Profile";
import config from "../../config";
import { addQuery } from "../../store/homescreen";
import { useSelector } from "react-redux";

const Navbar = () => {
   const user = getUserDetails();
   const query = useSelector((state) => state.homescreen.query);

   const [showModal, setShowModal] = useState(false);

   return (
      <NavbarContainer>
         <Link style={{ flex: 1, display: "flex" }} to="/">
            <NavLogo src="/images/navbar/logo.svg" />
         </Link>
         <NavbarSearchContainer>
            <Search width={"75%"} query={query} setQuery={addQuery} />
         </NavbarSearchContainer>
         <UserDetails>
            <DropdownButton
               drop={"start"}
               variant="none"
               title={
                  <User name={user.name} image={config.url + user.profilePic} />
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
               {user.role === 2 && (
                  <Dropdown.Item
                     as={Link}
                     to="/admin"
                     className="py-2"
                     eventKey="1"
                  >
                     Admin Portal
                  </Dropdown.Item>
               )}

               {user.role === 2 && <Dropdown.Divider />}

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
            Component={<ProfileForm handleModal={setShowModal} />}
         />
      </NavbarContainer>
   );
};

export default Navbar;
