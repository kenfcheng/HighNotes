import React from "react";
import Locator from "../components/locator";
import GoogMap from "../components/googMap";
const Home = (props) => {
  return (
    <div>
      <div>
        <h2>WE ARE LOGGED IN</h2>
      </div>
      <Locator />
      <GoogMap />
    </div>
  );
};

Home.propTypes = {};

export default Home;
