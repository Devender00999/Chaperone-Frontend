import React from "react";
import { Option, Select } from "./SelectTag.styles";

const SelectTag = (props) => {
   const { defaultValue, options, value } = props;
   return (
      <Select {...props} value={value}>
         <Option value="">{defaultValue}</Option>
         {options.map((option) => (
            <Option key={option} value={option}>
               {option}
            </Option>
         ))}
      </Select>
   );
};

export default SelectTag;
