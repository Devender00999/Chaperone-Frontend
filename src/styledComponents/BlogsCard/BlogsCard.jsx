import React from "react";
// import { User, UserImage, UserName } from "../../Navbar/Navbar.styles";
import {
  CardContainer,
  CardData,
  CardDesc,
  CardHeading,
  CardImage,
} from "../common/Card/Card.styles";
import ShareIcon from "@mui/icons-material/Share";
import Like from "../common/Like";
import User from "../common/User/User";
import { UserDetails, UserProps } from "../common/User/User.styles";

const BlogsCard = (props) => {
  return (
    <CardContainer>
      <CardImage image={props.image} />
      <CardData>
        <CardHeading>{props.heading}</CardHeading>
        <CardDesc>{props.desc}</CardDesc>
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

export default BlogsCard;
