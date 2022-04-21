import React from "react";
import { Wrapper, Avatar, LoveBeer, CountComments } from "./ProfileInfo.styled";

const ProfileInfo = () => {
  return (
    <Wrapper>
      <div>Эту информацию видят все пользователи</div>
      <Avatar></Avatar>
      <LoveBeer></LoveBeer>
      <CountComments></CountComments>
    </Wrapper>
  );
};

export default ProfileInfo;
