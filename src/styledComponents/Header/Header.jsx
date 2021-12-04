import React from "react";
import { StyledButtons } from "../../components/common/Button.styles";
import {
  ButtonSection,
  Desc,
  HeroImage,
  HeroImageContainer,
  LoginSection,
  Logo,
  LogoContainer,
  StyledHeader,
} from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <HeroImageContainer>
        <HeroImage src="/images/header/hero-image.png" />
      </HeroImageContainer>

      <LoginSection>
        <LogoContainer>
          <Logo src="/images/logo/logo.png" />
        </LogoContainer>
        <Desc>
          Chaperone guides students through curated information & resources
          relevant to their college degree.
        </Desc>
        <ButtonSection>
          <StyledButtons>Create a new account</StyledButtons>
          <StyledButtons>Sign in with Google</StyledButtons>
          <StyledButtons>Sign in with Email</StyledButtons>
        </ButtonSection>
      </LoginSection>
    </StyledHeader>
  );
};

export default Header;
