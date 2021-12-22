import React from "react";
import {
  NavbarSearchIcon,
  NavbarSearchInput,
  NavbarSearchInputContainer,
} from "./Navbar.styles";

const Search = (props) => {
  return (
    <NavbarSearchInputContainer width={props.width}>
      <NavbarSearchIcon src="/images/common/search.svg" alt="search" />
      <NavbarSearchInput type="search" placeholder="Search" />
    </NavbarSearchInputContainer>
  );
};

export default Search;
