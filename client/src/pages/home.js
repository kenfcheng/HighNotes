import React from "react";
import CurrentPosition from "../components/currentPosition";
import Profile from "../components/userProfile";
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
    </div>
  );
};

Home.propTypes = {};

export default Home;
