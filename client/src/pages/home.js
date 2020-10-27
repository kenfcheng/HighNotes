import React from "react";
import CurrentPosition from "../components/Geolocation/currentPosition";
import Profile from "../components/UserProfile/userProfile";
import ChatArea from "../components/Chat/ChatArea";
// import UpdateProfile from "../components/updateUserProfile";
// import DeleteUser from "../components/deleteUserProfile";
const Home = (props) => {
  return (
    <div>
      <div>
        <h2>WE ARE LOGGED IN</h2>
      </div>
      <CurrentPosition />
      <Profile />
      <ChatArea />
    </div>
  );
};

Home.propTypes = {};

export default Home;
