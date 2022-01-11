import React from "react";
import {
  BackButton,
  StyledTag,
  StyledTagContainer,
  ViewLink,
} from "./Common.styles";

export const GoBack = (props) => {
  const { link } = props;
  return (
    <BackButton to={link}>
      <img src={"/images/common/arrow.svg"} alt="Arrow" />
    </BackButton>
  );
};

export const StyledLink = (props) => {
  const { link, title, image, style } = props;
  return (
    <ViewLink to={link} style={style} {...props}>
      {title}{" "}
      <img src={image ? image : "/images/common/arrow.svg"} alt="Arrow" />
    </ViewLink>
  );
};

export const StyledTags = (props) => {
  return (
    <StyledTagContainer>
      {props.data.map((item, key) => (
        <StyledTag key={key} color={props.color} bColor={props.bColor}>
          {item}
        </StyledTag>
      ))}
    </StyledTagContainer>
  );
};
