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
                  style={{ padding: "1rem 0 0.5rem" }}
               />
            )}
            <DescText style={props.small ? { fontSize: "0.75rem" } : {}}>
               {props.desc}
            </DescText>
            <UserDetails style={{ padding: "0.5rem 0" }}>
               {!props.small && (
                  <User
                     className="secondary-color"
                     image="/images/common/user-2.svg"
                     name="Deepak Kumar"
                     small={props.small}
                  />
               )}
               <UserProps>
                  <SecondaryButton to={props.link}>
                     View Project
                  </SecondaryButton>
                  <SecondaryButton to={props.githubLink}>
                     Github Link
                  </SecondaryButton>
               </UserProps>
            </UserDetails>
         </CardData>
      </CardContainer>
   );
};

export default ProjectCard;
