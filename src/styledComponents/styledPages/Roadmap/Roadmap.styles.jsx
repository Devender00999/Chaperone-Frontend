import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticlesContainer = styled.div`
   margin: 0.5rem 0;
`;

export const ArticleTextCon = styled.div`
   display: flex;
   flex-direction: column;
   flex: 1;
`;

export const ArticleNumber = styled.h1`
   color: #adadad;
   flex: 0.1;
   font-family: Poppins;
   font-size: 30px;
   font-weight: 400;
   letter-spacing: 2px;
   margin-right: 1rem;
   margin-bottom: 0;
   text-align: left;
`;

export const Article = styled(Link)`
   display: flex;
   text-decoration: none;
`;

export const HeadingContainer = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const ProjectContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`;
