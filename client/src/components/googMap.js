import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// Google Map Embedded in Page
const mapStyles = {
  width: "50%",
  height: "50%",
};

class GoogMap extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 53.2734,
            lng: -7.77832031,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"This is test name"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCwBTeZJQafMPXIkuHGMWSogR6vtvjFOtY",
})(GoogMap);
