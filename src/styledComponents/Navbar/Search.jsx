import React from "react";
import {
  NavbarSearchIcon,
  NavbarSearchInput,
  NavbarSearchInputContainer,
} from "./Navbar.styles";

const NavbarSearh = () => {
  return (
    <NavbarSearchInputContainer>
      <NavbarSearchIcon src="/images/common/search.svg" alt="search" />
      <NavbarSearchInput type="search" placeholder="Search" />
    </NavbarSearchInputContainer>
  );
};

export default NavbarSearh;
