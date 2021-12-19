import React from "react";
import { CardContainer, CardData, CardImage } from "../common/Card/Card.styles";
import {
  DescText,
  Heading,
  SecondaryButton,
} from "../common/Common/Common.styles";

import User from "../common/User/User";
import { UserDetails, UserProps } from "../common/User/User.styles";

const ProjectCard = (props) => {
  return (
    <CardContainer style={props.small && { width: "48%" }}>
      <CardImage
        image={props.image}
        style={props.small && { height: "180px" }}
      />
      <CardData style={props.small && { padding: "1rem" }}>
        <Heading>{props.heading}</Heading>
        {props.small && (
          <User
            className="secondary-color"
            image="/images/common/user-2.svg"
            name="Deepak Kumar"
            small={props.small}
          />
        )}
        <DescText style={props.small && { fontSize: "0.75rem" }}>
          {props.desc}
        </DescText>
        <UserDetails>
          {!props.small && (
            <User
              className="secondary-color"
              image="/images/common/user-2.svg"
              name="Deepak Kumar"
              small
            />
          )}
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
