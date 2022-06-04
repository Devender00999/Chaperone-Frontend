import React, { useEffect, useState } from "react";
import {
   InputTag,
   InputTagsContainer,
   InputTagDelete,
   InputTagStyle,
} from "./InputTags.styles";

function InputTags({ tags, setTags }) {
   const [inputTags, setInputTags] = useState([...tags]);

   useEffect(() => {
      setTags(inputTags);
   }, [inputTags, setTags]);

   const handleAdd = (e) => {
      if (e.keyCode === 13) {
         const data = e.target.value;
         if (inputTags.includes(data) === false) {
            setInputTags([...inputTags, data]);
            setTags(inputTags);
         }
         e.target.value = "";
      }
   };
   const handleBack = (e) => {
      if (e.keyCode === 8 && e.target.value === "") {
         setInputTags(inputTags.slice(0, inputTags.length - 1));
         e.target.value = "";
         setTags(inputTags);
      }
   };
   const handleDelete = (item) => {
      setInputTags(inputTags.filter((element) => element !== item));
      setTags(inputTags);
   };
   return (
      <InputTagsContainer>
         {inputTags.map((item, key) => (
            <InputTagStyle key={key}>
               {item}
               <InputTagDelete
                  src="/images/common/delete-cross.svg"
                  onClick={() => handleDelete(item)}
               />
            </InputTagStyle>
         ))}

         <InputTag
            onKeyUp={handleAdd}
            onKeyDown={handleBack}
            rows={1}
            type="text"
         />
      </InputTagsContainer>
   );
}

export default InputTags;
