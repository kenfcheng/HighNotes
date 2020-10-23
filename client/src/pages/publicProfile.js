import React from "react";
import UserProfile from "../components/userProfile";
import UpdateProfile from "../components/updateUserProfile";
import DeleteProfile from "../components/deleteUserProfile";

const publicProfile = () => {
  return (
    <div>
      <UserProfile />
      <UpdateProfile />
      <DeleteProfile />
    </div>
  );
};

export default publicProfile;
