import styled from "styled-components";
import { Link } from "react-router-dom";
import { styled as styledMui } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { colors } from "../../../config";

export const StyledContainer = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
`;

export const CommonContainer = styled.div`
   display: flex;
   justify-content: space-evenly;
   column-gap: 1rem;
   row-gap: 1rem;
   flex-wrap: wrap;
`;

export const StyledMain = styled.div`
   display: flex;
   height: 100%;
   width: 1200px;
   margin: 0 auto;
`;

export const Content = styled.div`
   padding: 1.25rem 1.25rem 0;
   display: flex;
   width: 100%;
   border-left: 1px solid #f2f2f2;
   flex: 4;
   min-height: calc(100vh - 60px);
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
   margin: 0;
`;

export const ViewLink = styled(Link)`
   color: #ff6600;
   cursor: pointer;
   font-size: 0.875rem;
   text-decoration: none;
   height: max-content;

   &:hover {
      color: #ff6600;
      opacity: 0.8;
   }
`;

export const AnchorLink = styled.a`
   color: #ff6600;
   cursor: pointer;
   font-size: 0.875rem;
   text-decoration: none;
   height: max-content;

   &:hover {
      color: #ff6600;
      opacity: 0.8;
   }
`;

export const PageHeading = styled.h3`
   font-size: 1.5rem;
   margin: 0;
`;

export const BackButton = styled(ViewLink)`
   transform: rotate(180deg);
`;

export const SearchInput = styled.input`
   width: 200px;
   padding: 0 1rem;
   outline: none;
   height: 35px;
`;

export const SecondaryHeading = styled.h3`
   font-family: Poppins;
   font-size: 1.25rem;
   font-weight: 400;
   text-transform: uppercase;
   color: #ff6600;

   line-height: 30px;
   letter-spacing: 2px;
   margin: 0; ;
`;

export const DescText = styled.p`
   color: #666666;
   font-family: Poppins;
   font-size: 0.875rem;
   margin: 0;
   padding: 0.5rem 0;
`;

export const HeadingContent = styled.h2`
   display: flex;
   column-gap: 30px;
   height: 40px;
   align-items: center;
`;

export const HeadingContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
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
   margin: 0.5rem 0;
   font-weight: 500;
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

export const SecondaryButtonAnchor = styled.a`
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
export const OutlinedButton = styledMui(Button)`
   color: ${colors.primary};
   border-color: ${colors.primary};

   &:hover{
      color: ${colors.primaryLight};
      border-color: ${colors.primaryLight};
   
   }
`;

export const StyledTagContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   row-gap: 0.625rem;
   flex: 3;
`;

export const StyledTag = styled.p`
   background: ${(props) => props.bColor};
   color: ${(props) => props.color};
   border-radius: 1.25rem;
   font-size: 0.8125rem;
   padding: 4px 20px;
   margin-right: 15px;
   height: max-content;
   margin-bottom: 0;
`;

//List

export const ListContainer = styled.div`
   padding: 1.5rem 0;
   width: 30%;
`;

export const List = styled.ul`
   display: flex;
   padding: 0.5rem 0 0.5rem 1.5rem;
   flex-direction: column;
`;

export const ListItem = styled.li`
   font-family: Poppins;
   font-size: 0.875rem;
   font-weight: 400;
   color: #515151;
   padding: 0.2rem 0;
   text-transform: capitalize;
   word-wrap: break-word;
`;

export const HeaderPreview = styled.div`
   width: 100%;
   height: 200px;
   background: ${(props) => `url(${props.image})`};
   background-repeat: no-repeat;
   background-size: "cover";
`;
