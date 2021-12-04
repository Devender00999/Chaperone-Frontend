import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  background: #f6f6f6;
`;

export const HeroImageContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroImage = styled.img``;

export const LoginSection = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

export const LogoContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  width: 300px;
`;

export const Desc = styled.p`
  font-family: Raleway;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 1px;
  width: 80%;
  margin-bottom: 2rem;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
`;
