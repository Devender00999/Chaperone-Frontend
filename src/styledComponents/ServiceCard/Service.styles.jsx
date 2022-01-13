import { Link } from "react-router-dom";
import styled from "styled-components";

export const ServicesContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
`;

export const ServicesCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 4rem;
  column-gap: 4rem;
`;

export const ServicesHeading = styled.h1`
  font-family: Poppins;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 2px;
  text-align: left;

  border: 2px solid;
  width: max-content;
  padding: 1rem 2rem;
  margin-bottom: 2.5rem;
`;

export const ServiceContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  justify-content: space-evenly;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.8);
`;

export const ServiceIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

export const ServiceTitle = styled.h2`
  font-family: Poppins;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0px;
  text-align: left;
  color: #515151;
  padding-bottom: 1rem;
`;

export const ServiceDesc = styled.p`
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
`;

export const ServiceLink = styled(Link)`
  text-decoration: none;
  align-self: flex-end;
  margin-top: 1rem;
`;
