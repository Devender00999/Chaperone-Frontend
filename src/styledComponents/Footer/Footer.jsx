import React from "react";
import {
  FooterContainer,
  FooterHeading,
  FooterLogo,
  FooterSocial,
  FooterSocialContainer,
  FooterText,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Developed By <FooterHeading>404 Coders</FooterHeading>
      </FooterText>
      <FooterLogo src="/images/logo/logo.svg" alt="site-logo" />
      <FooterSocialContainer>
        <a href="/">
          <FooterSocial src="/images/footer/facebook.svg" />
        </a>
        <a href="/">
          <FooterSocial src="/images/footer/instagram.svg" />
        </a>
        <a href="/">
          <FooterSocial src="/images/footer/linkedin.svg" />
        </a>
      </FooterSocialContainer>
    </FooterContainer>
  );
};

export default Footer;
