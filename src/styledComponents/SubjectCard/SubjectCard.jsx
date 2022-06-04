import React from "react";
import config, { colors } from "../../config";
import { StyledAnchorLink } from "../common/Common/Common";
import { DescText, Heading } from "../common/Common/Common.styles";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import ClearIcon from "@mui/icons-material/Clear";

import {
   SubjectContainer,
   SubjectOptions,
   SubjectTopic,
   SubjectTopics,
} from "./SubjectCard.styles";
import { Alert } from "@mui/material";

const SubjectCard = (props) => {
   const { subject, onEdit, onDelete } = props;
   return (
      <SubjectContainer>
         <SubjectOptions>
            <Heading>{subject.subName}</Heading>
            <div
               style={{
                  display: onEdit ? "flex" : "none",
                  columnGap: "0.5rem",
               }}
            >
               <EditRoundedIcon
                  className="cursor-pointer"
                  onClick={() => onEdit(subject._id)}
                  color="red"
                  style={{ color: colors.primary }}
               />
               <ClearIcon
                  className="cursor-pointer"
                  onClick={() => onDelete(subject._id)}
                  style={{ color: colors.primary }}
               />
            </div>
         </SubjectOptions>
         <SubjectTopics
            style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
         >
            {subject.topics.length > 0 ? (
               subject.topics.map((topic, i) => {
                  const url = { link: config.url + topic.topicLink };
                  return (
                     <SubjectTopic key={topic._id}>
                        <div style={{ display: "flex" }}>
                           <DescText style={{ padding: 0 }}>
                              {i + 1}.{"  "} {topic.topicName}
                           </DescText>
                        </div>
                        <StyledAnchorLink
                           rel={"external"}
                           target="_blank"
                           link={url.link}
                           title="View"
                        />
                     </SubjectTopic>
                  );
               })
            ) : (
               <Alert severity="warning">No Topic Added</Alert>
            )}
         </SubjectTopics>
      </SubjectContainer>
   );
};

export default SubjectCard;
