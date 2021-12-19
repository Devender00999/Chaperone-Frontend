import { Link } from "react-router-dom";
import styled from "styled-components";
export const RoadmapsCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  row-gap: 30px;
  column-gap: 30px;
  margin-top: 15px;
`;

export const RoadmapsCard = styled.div`
  width: 16.25rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  justify-content: space-evenly;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.8);
`;

export const RoadmapsCardImage = styled.img`
  width: 65px;
  height: 55px;
  padding: 5px 10px;
  border: 1px solid;
  margin-bottom: 1rem;
  border-image-source: linear-gradient(
    139deg,
    rgba(255, 102, 0, 0) 40.73%,
    #ff6600 91.72%
  );
  border-image-slice: 1;
`;

export const RoadmapsCardTitle = styled.h2`
  font-family: Poppins;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
`;

export const RoadmapsCardList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;
export const RoadmapsCardListItem = styled.li`
  color: #515151;
  font-size: 15px;
`;

export const RoadmapsCardLink = styled(Link)`
  text-decoration: none;
  align-self: flex-end;
`;
