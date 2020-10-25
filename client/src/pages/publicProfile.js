import React from "react";
import UserProfile from "../components/UserProfile/userProfile";
import UpdateProfile from "../components/UserProfile/updateUserProfile";
import DeleteProfile from "../components/UserProfile/deleteUserProfile";

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
