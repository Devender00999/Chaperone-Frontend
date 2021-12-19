import React from "react";
import { ViewLink } from "./Common.styles";

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
