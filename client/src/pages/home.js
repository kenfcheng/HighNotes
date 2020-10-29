import React from "react";
import CurrentPosition from "../components/Geolocation/currentPosition";
import Profile from "../components/UserProfile/userProfile";
import ChatArea from "../components/Chat/ChatArea";

// import UpdateProfile from "../components/updateUserProfile";
// import DeleteUser from "../components/deleteUserProfile";
//import MainPhotoComponent from "../components/Images/photoComponent";
const Home = (props) => {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h2 className="container center-row">WELCOME!</h2>
      </div>

      <CurrentPosition />
      <div className="container center-row">
        <Profile />
      </div>
      <br></br>
      <div className="container">
        <ChatArea />
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
