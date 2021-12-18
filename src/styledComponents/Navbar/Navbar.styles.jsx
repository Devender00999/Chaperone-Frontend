import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  padding: 5px 30px;
  background: #f6f6f6;
  height: 60px;
  justify-content: space-between;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1;
`;

export const NavLogo = styled.img`
  /* height: 40px; */
  flex: 1;
`;
export const NavbarSearchContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
`;

export const NavbarSearchInput = styled.input`
  width: 100%;
  height: 65%;
  flex: 3;
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  padding: 15px 5px 15px 35px;
  outline: none;
  &::-webkit-search-cancel-button {
    position: relative;
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    opacity: 0.5;
    border-radius: 10px;
    background: url("/images/common/cross.svg") no-repeat 50% 50%;
  }
`;
export const NavbarSearchIcon = styled.img`
  width: 20px;
  height: 20px;
  left: 10px;
  position: absolute;
  opacity: 0.8;
`;
export const NavbarSearchInputContainer = styled.div`
  position: relative;
  width: 75%;
  display: flex;
  align-items: center;
`;
export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const UserImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  border-radius: 30px;
`;

export const UserName = styled.p`
  font-family: "poppins";
  font-size: 16px;
  margin: 0;
`;

export const NavNotification = styled.img`
  margin-right: 30px;
  width: 22px;
`;
