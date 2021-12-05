import styled from "styled-components";

const FooterContainer = styled.div`
  background: #f6f6f6;
  padding: 15px 100px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const FooterText = styled.p`
  font-family: poppins;
  font-size: 16px;
`;

const FooterHeading = styled.span`
  font-weight: 500;
  vertical-align: middle;
`;
const FooterLogo = styled.img`
  height: 40px;
`;
const FooterSocialContainer = styled.div`
  display: flex;
  column-gap: 20px;
  margin: 0 30px;
`;
const FooterSocial = styled.img`
  width: 30px;
`;
export {
  FooterContainer,
  FooterLogo,
  FooterSocialContainer,
  FooterText,
  FooterHeading,
  FooterSocial,
};
