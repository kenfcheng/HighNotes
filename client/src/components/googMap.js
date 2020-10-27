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

/*   }
  getGoogleMaps() {
    const google = window.google;
    // If we haven't already defined the promise, define it
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve) => {
        // Add a global handler for when the API finishes loading
        window.resolveGoogleMapsPromise = () => {
          // Resolve the promise
          resolve(google);

          // Tidy up
          delete window.resolveGoogleMapsPromise;
        };

        // Load the Google Maps API
        const script = document.createElement("script");
        const API = "AIzaSyAMAPrhW6gC1lGZuCVqZB7TdwoSOH2qjpA";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
      });
    }

    // Return a promise for the Google Maps API
    return this.googleMapsPromise;
  }

  handleClick() {
    this.getGoogleMaps().then((google) => {
      const googMap = {
        zoom: 6,
        center: { lat: -34.397, lng: 150.644 },
      };
      this.setState({
        map: new google.maps.Map(document.getElementById("map"), googMap),
      });
      console.log("map", this.state.map);
      this.setState({
        infoWindow: new google.maps.infoWindow(),
      });

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            this.state.infoWindow.setPosition(pos);
            this.state.infoWindow.setContent("Location found.");
            this.state.infoWindow.open(this.state.map);
            this.state.map.setCenter(pos);
          },
          () => {
            handleLocationError(
              true,
              this.state.infoWindow,
              this.state.map.getCenter()
            );
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(
          false,
          this.state.infoWindow,
          this.state.map.getCenter()
        );
      }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(this.state.map);
      }
    });
  }
  UNSAFE_componentWillMount() {
    this.getGoogleMaps();
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.handleClick();
  } */
