import React, { useState } from "react";
import { Tag, TagContainer } from "./Tags.styles";

const Tags = (props) => {
  const [tagIndex, setTag] = useState(0);
  return (
    <TagContainer>
      {props.tags.map((tag, index) => (
        <Tag
          key={index}
          onClick={() => setTag(index)}
          selected={tagIndex === index}
        >
          {tag.value}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default Tags;
