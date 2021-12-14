import React, { useState } from "react";
import { Tag, TagContainer } from "./Tags.styles";

const Tags = (props) => {
  const [tag, setTag] = useState("");
  console.log(props.tags, tag);
  return (
    <TagContainer>
      {props.tags.map((tag, index) => (
        <Tag key={index} onClick={() => setTag(index)} selected={index === tag}>
          {tag.value}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default Tags;
