import React from "react";
import { Option, Select } from "./SelectTag.styles";

const SelectTag = (props) => {
  const { defaultValue, options, selected } = props;
  return (
    <Select {...props} selected={selected} defaultValue={defaultValue}>
      <Option value={defaultValue} disabled>
        {defaultValue}
      </Option>
      {options.map((option) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

export default SelectTag;
