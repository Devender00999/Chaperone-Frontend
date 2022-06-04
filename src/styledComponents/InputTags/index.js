import {
   InputTag,
   InputTagsContainer,
   InputTagDelete,
   InputTagStyle,
} from "./InputTags.styles";

function InputTags({ tags, setTags }) {
   const handleAdd = (e) => {
      if (e.keyCode === 13) {
         const data = e.target.value;
         if (tags.includes(data) === false) {
            setTags([...tags, data]);
         }
         e.target.value = "";
      }
   };
   const handleBack = (e) => {
      if (e.keyCode === 8 && e.target.value === "") {
         setTags(tags.slice(0, tags.length - 1));
         e.target.value = "";
      }
   };
   const handleDelete = (item) => {
      setTags(tags.filter((element) => element !== item));
   };
   return (
      <InputTagsContainer>
         {tags.map((item, key) => (
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
