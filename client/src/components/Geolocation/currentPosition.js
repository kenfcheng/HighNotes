import React, { Component } from "react";
import { render } from "react-dom";

// Gets User's Current Position
class CurrentPosition extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      console.log(position.coords.latitude, position.coords.longitude);
      if ("geolocation" in navigator) {
        console.log("Available");
      } else {
        console.log("Not Available");
      }
    });
  }

  render() {
    return (
      <div>
        <h4></h4>
      </div>
    );
  }
}

render(<CurrentPosition />, document.getElementById("root"));

export default CurrentPosition;
