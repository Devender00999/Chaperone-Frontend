import React from "react";
import { StyledTag, StyledTagContainer, ViewLink } from "./Common.styles";

export const StyledLink = (props) => {
  const { link, title, image, style } = props;
  return (
    <ViewLink to={link} style={style}>
      {title}{" "}
      <img src={image ? image : "/images/common/arrow.svg"} alt="Arrow" />
    </ViewLink>
  );
};

export const StyledTags = (props) => {
  return (
    <StyledTagContainer>
      {props.data.map((item, id) => (
        <StyledTag key={id} color={props.color} bColor={props.bColor}>
          {item}
        </StyledTag>
      ))}
    </StyledTagContainer>
  );
};
