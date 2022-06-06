import React from "react";
import {
   NavbarSearchIcon,
   NavbarSearchInput,
   NavbarSearchInputContainer,
} from "./Navbar.styles";

import { useDispatch } from "react-redux";

const Search = ({ width, query, setQuery }) => {
   const dispatch = useDispatch();
   return (
      <NavbarSearchInputContainer width={width}>
         <NavbarSearchIcon src="/images/common/search.svg" alt="search" />
         <NavbarSearchInput
            value={query}
            onChange={(e) => dispatch(setQuery(e.target.value))}
            type="search"
            placeholder="Search"
         />
      </NavbarSearchInputContainer>
   );
};

export default Search;
