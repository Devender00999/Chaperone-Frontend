import React from "react";
import { Tag, TagContainer } from "./Tags.styles";

const Tags = (props) => {
  return (
    <TagContainer>
      {props.tags.map((tag, index) => (
        <Tag key={index} selected={tag.selected}>
          {tag.value}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default Tags;
