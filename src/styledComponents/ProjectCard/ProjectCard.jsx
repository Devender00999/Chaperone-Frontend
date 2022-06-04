import React from "react";
import config from "../../config";
import { CardContainer, CardData, CardImage } from "../common/Card/Card.styles";
import {
   DescText,
   Heading,
   SecondaryButtonAnchor,
} from "../common/Common/Common.styles";

import User from "../common/User/User";
import { UserDetails, UserProps } from "../common/User/User.styles";

const ProjectCard = (props) => {
   console.log(props);
   return (
      <CardContainer style={props.small && { width: "48%" }}>
         <CardImage
            image={config.url + props.image}
            style={props.small && { height: "180px" }}
         />
         <CardData style={props.small && { padding: "1rem" }}>
            <Heading>{props.heading}</Heading>
            {props.small && (
               <User
                  className="secondary-color"
                  image={config.url + props.author.profilePic}
                  name={props.author.name}
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
                     className={"secondary-color"}
                     image={config.url + props.author.profilePic}
                     name={props.author.name}
                     small={props.small}
                  />
               )}
               <UserProps>
                  <SecondaryButtonAnchor href={props.link} target="_blank">
                     View Project
                  </SecondaryButtonAnchor>
                  <SecondaryButtonAnchor
                     href={props.githubLink}
                     target="_blank"
                  >
                     Github Link
                  </SecondaryButtonAnchor>
               </UserProps>
            </UserDetails>
         </CardData>
      </CardContainer>
   );
};

export default ProjectCard;
