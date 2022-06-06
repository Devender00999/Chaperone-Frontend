import React from "react";
import { UserContainer, UserImage, UserName } from "./User.styles";

const User = (props) => {
   const { small } = props;
   return (
      <UserContainer style={props.style}>
         <UserImage
            style={
               small
                  ? { width: "30px", height: "30px" }
                  : { width: "35px", height: "35px" }
            }
            src={props.image}
         />
         <UserName
            style={small ? { fontSize: "0.75rem" } : {}}
            className={props.className}
         >
            {props.name}
         </UserName>
      </UserContainer>
   );
};

export default User;
