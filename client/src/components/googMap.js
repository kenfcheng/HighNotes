import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
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
            lat: YOUR_LATITUDE,
            lng: YOUR_LONGITUDE,
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
