import React, { useState } from "react";
import { StyledButtons } from "../common/Common/Common.styles";
import StyledModal from "../CustomModal/CustomModal";

import SignInForm from "../Form/SigninForm";
import SignUpForm from "../Form/SignUpForm";
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

const Header = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [componentForm, setComponentForm] = useState({
    content: SignUpForm,
  });
  const handleComponentChange = (e, Component) => {
    componentForm.content = Component;
    setComponentForm({
      content: Component,
    });
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
          <StyledButtons onClick={(e) => handleComponentChange(e, SignUpForm)}>
            Create a new account
          </StyledButtons>
          {/* <StyledButtons
          // onClick={() => {
          //   localStorage.setItem(
          //     "user",
          //     JSON.stringify({
          //       name: "Deepak Kumar",
          //       isAdmin: true,
          //     })
          //   );
          //   window.location.href = "/dashboard";
          // }}
          >
            Sign in with Google
          </StyledButtons> */}
          <StyledButtons onClick={(e) => handleComponentChange(e, SignInForm)}>
            Sign in with Email
          </StyledButtons>
        </ButtonSection>
      </LoginSection>
      <StyledModal
        showModal={showModal}
        setShowModal={setShowModal}
        Component={
          <componentForm.content changeComponent={handleComponentChange} />
        }
      />
    </StyledHeader>
  );
};

export default Header;
