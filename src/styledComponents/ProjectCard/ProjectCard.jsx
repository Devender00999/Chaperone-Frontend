import React from "react";
import {
  CardContainer,
  CardData,
  CardDesc,
  CardHeading,
  CardImage,
} from "../common/Card/Card.styles";

import User from "../common/User/User";
import { UserDetails, UserProps } from "../common/User/User.styles";
import { SecondaryButton } from "../../components/common/Button.styles";

const ProjectCard = (props) => {
  console.log(props);
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
            <SecondaryButton to="/">View Project</SecondaryButton>
            <SecondaryButton to="">Github Link</SecondaryButton>
          </UserProps>
        </UserDetails>
      </CardData>
    </CardContainer>
  );
};

export default ProjectCard;
