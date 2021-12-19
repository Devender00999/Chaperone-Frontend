import React from "react";
import { UserContainer, UserImage, UserName } from "./User.styles";

const User = (props) => {
  return (
    <UserContainer>
      <UserImage
        style={props.small && { width: "20px", height: "20px" }}
        src={props.image}
      />
      <UserName
        style={props.small && { fontSize: "0.75rem" }}
        className={props.className}
      >
        {" "}
        {props.name}{" "}
      </UserName>
    </UserContainer>
  );
};

export default User;
