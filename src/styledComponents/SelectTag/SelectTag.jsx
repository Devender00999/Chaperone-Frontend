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
         {options.map((option) => {
            if (option._id)
               return (
                  <Option key={option._id} value={option._id}>
                     {option.name}
                  </Option>
               );
            return (
               <Option key={option} value={option}>
                  {option}
               </Option>
            );
         })}
      </Select>
   );
};

export default SelectTag;
