import React from "react";
import { UserContainer, UserImage } from "./User.styles";

const User = (props) => {
  return (
    <UserContainer>
      <UserImage src="/images/common/user-2.svg" />
    </UserContainer>
  );
};

export default User;
