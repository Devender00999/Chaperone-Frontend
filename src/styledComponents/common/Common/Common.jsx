import React from "react";
import { StyledTag, StyledTagContainer, ViewLink } from "./Common.styles";

export const StyledLink = (props) => {
  return (
    <ViewLink to={props.link} style={props.style}>
      {props.title}{" "}
      <img
        src={props.image ? props.image : "/images/common/arrow.svg"}
        alt="Arrow"
      />
    </ViewLink>
  );
};

export const StyledTags = (props) => {
  return (
    <StyledTagContainer>
      {props.data.map((item) => (
        <StyledTag color={props.color} bColor={props.bColor}>
          {item}
        </StyledTag>
      ))}
    </StyledTagContainer>
  );
};
