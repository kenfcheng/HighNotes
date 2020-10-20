import React from "react";
import CurrentPosition from "../components/currentPosition";
import GoogMap from "../components/googMap";
const Home = (props) => {
  return (
    <div>
      <div>
        <h2>WE ARE LOGGED IN</h2>
      </div>
      <CurrentPosition />
      <GoogMap />
    </div>
  );
};

Home.propTypes = {};

export default Home;
