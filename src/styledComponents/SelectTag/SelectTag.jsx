import React from "react";
import { Option, Select } from "./SelectTag.styles";

const SelectTag = ({
   defaultValue,
   options,
   onChange,
   value,
   ...otherProps
}) => {
   return (
      <Select {...otherProps} onChange={onChange} value={value}>
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
