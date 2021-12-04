import React, { useState } from "react";
import { StyledButtons } from "../../components/common/Button.styles";
import StyedModal from "../CustomModal/CustomModal";

import SignInForm from "../Form/SigninForm";
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
  const [showModal, setShowModal] = useState(false);
  const [componentForm, setComponentForm] = useState({
    content: SignInForm,
  });
  const handleClick = (e, Component) => {
    componentForm.content = Component;
    setComponentForm(componentForm);
    setShowModal(true);
  };
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
          <StyledButtons onClick={(e) => handleClick(e, SignInForm)}>
            Sign in with Email
          </StyledButtons>
        </ButtonSection>
      </LoginSection>
      <StyedModal
        showModal={showModal}
        setShowModal={setShowModal}
        Component={componentForm.content}
      />
    </StyledHeader>
  );
};

export default Header;
