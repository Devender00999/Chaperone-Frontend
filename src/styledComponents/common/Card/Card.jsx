import React from "react";
// import { User, UserImage, UserName } from "../../Navbar/Navbar.styles";
import User from "../User/User";
import { UserDetails, UserProps } from "../User/User.styles";
import {
  CardContainer,
  CardData,
  CardDesc,
  CardHeading,
  CardImage,
} from "./Card.styles";
import ShareIcon from "@mui/icons-material/Share";
import Like from "../Like";

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
          <User
            className="secondary-color"
            image="/images/common/user-2.svg"
            name="Deepak Kumar"
          />
          <UserProps>
            <Like className="cursor-pointer" />
            <ShareIcon
              className="cursor-pointer"
              style={{ marginLeft: "1rem" }}
            />
          </UserProps>
        </UserDetails>
      </CardData>
    </CardContainer>
  );
};

export default Card;
