import React from "react";
import { UserContainer, UserImage, UserName } from "./User.styles";

const User = (props) => {
  return (
    <UserContainer>
      <UserImage src={props.image} />
      <UserName className={props.className}> {props.name} </UserName>
    </UserContainer>
  );
};

export default User;
