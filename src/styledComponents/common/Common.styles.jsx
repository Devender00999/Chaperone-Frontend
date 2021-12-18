import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const StyledMain = styled.div`
  display: flex;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 1.25rem 1.25rem 0;
  display: flex;
  width: 100%;
  border-left: 1px solid #f2f2f2;
  flex: 4;
`;

export const MainContent = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.direction};
  /* overflow: auto; */
  padding: 0 2rem;
`;
export const LSideBarContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 20px 0px;
  align-items: center;
  flex: 1;
  flex-direction: column;
  position: sticky;
  position: -webkit-sticky;
  top: 60px;
`;

export const RSideBarContainer = styled.div`
  display: flex;
  padding-left: 20px;
  align-items: flex-start;
  flex: 1;
  height: max-content;
  flex-direction: column;
  position: sticky;
  position: -webkit-sticky;
  top: 80px;
`;

export const Heading = styled.h3`
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
`;

export const DescText = styled.p`
  font-family: Poppins;
  font-size: 0.875rem;
  color: #666666;
`;

export const HeadingContent = styled.h2`
  display: flex;
  column-gap: 30px;
  height: 40px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.div`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Roboto";
  text-align: left;
  color: #ff6600;
`;

export const StyledButtons = styled.button`
  height: 45px;
  width: 300px;
  font-size: 18px;
  border: 0.8px solid rgba(102, 102, 102, 0.6);
  border-radius: 2px;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #666666;
  margin: 10px 0;
`;

export const PrimaryButton = styled.button`
  padding: 0.5rem 1rem;
  align-self: center;
  font-size: 0.875rem;
  background: #ff6600;
  font-weight: normal;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 2px;
  margin-top: 1rem;
`;

export const SecondaryButton = styled(Link)`
  font-size: 0.875rem;
  text-decoration: none;
  color: #ff6600;
  font-family: poppins;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  border: 1px solid #cacaca;
  &:hover {
    color: #ff6600;
  }
`;
