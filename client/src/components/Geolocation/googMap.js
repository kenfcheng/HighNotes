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
      latlong: { lat: 0, long: 0 },
    };
  }

  async componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
      let lat = 0;
      let long = 0;
      await navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log(position.coords.latitude, position.coords.longitude);
        return latlong;
      });

      this.setState({
        latlong: { lat: lat, long: long },
      });
      console.log("latlong", this.state.latlong);
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
          initialCenter={this.state.latlong}
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
