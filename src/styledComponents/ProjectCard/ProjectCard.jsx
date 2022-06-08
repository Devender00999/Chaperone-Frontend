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

const ProjectCard = ({ projectDetails }) => {
   const profilePic = projectDetails.author.profilePic.includes("https://") ? projectDetails.author.profilePic : config.url + projectDetails.author.profilePic;
   console.log(profilePic);

   return (
      <CardContainer style={projectDetails?.small && { width: "48%" }}>
         <CardImage
            image={config.url + projectDetails.image}
            style={projectDetails.small && { height: "180px" }}
         />
         <CardData style={projectDetails.small && { padding: "1rem" }}>
            <Heading>{projectDetails.heading}</Heading>
            {projectDetails.small && (
               <User
                  className="secondary-color"
                  image={profilePic}
                  name={projectDetails.author.name}
                  small={projectDetails.small}
                  style={{ padding: "1rem 0 0.5rem" }}
               />
            )}
            <DescText
               style={projectDetails.small ? { fontSize: "0.75rem" } : {}}
            >
               {projectDetails.description}
            </DescText>
            <UserDetails style={{ padding: "0.5rem 0" }}>
               {!projectDetails.small && (
                  <User
                     className={"secondary-color"}
                     image={config.url + projectDetails.author.profilePic}
                     name={projectDetails.author.name}
                     small={projectDetails.small}
                  />
               )}
               <UserProps>
                  <SecondaryButtonAnchor
                     href={projectDetails.link}
                     target="_blank"
                  >
                     View Project
                  </SecondaryButtonAnchor>
                  <SecondaryButtonAnchor
                     href={projectDetails.githubLink}
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
