import React from "react";
import { NavUser, NavUserImage, NavUserName } from "../../Navbar/Navbar.styles";
// import User from "../User/User";
import {
  CardContainer,
  CardData,
  CardDesc,
  CardHeading,
  CardImage,
  UserDetails,
} from "./Card.styles";

const Card = (props) => {
  return (
    <CardContainer>
      <CardImage image={"/images/blogs/Image.svg"} />
      <CardData>
        <CardHeading>Complete Roadmap to Web Development 2021</CardHeading>
        <CardDesc>
          Today there are so many languages and tools and frameworks. Which one
          should you learn? And for each, there are a ton of courses. Super
          confusing! We are here to give you full guidance...
        </CardDesc>
        <UserDetails>
          <NavUser>
            <NavUserImage src="/images/navbar/defaultuser.svg" />
            <NavUserName>Devender Kumar</NavUserName>
          </NavUser>{" "}
        </UserDetails>
      </CardData>
    </CardContainer>
  );
};

export default Card;
