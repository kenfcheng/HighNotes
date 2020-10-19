import React from "react";

const locator = () => {
  // Gets current location
  const location = document.getElementById("locate");

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      location.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  showPosition = (position) => {
    location.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude +
      "<br>State:" +
      position.coords.state +
      "<br>City:" +
      position.coords.city;

  }

  // Handles errors and rejections
  showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        location.innerHTML = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        location.innerHTML = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        location.innerHTML = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        location.innerHTML = "An unknown error occurred.";
        break;
    }
  }
// Displays Result on Map
 showPosition = (position) => {
    const latlon = position.coords.latitude + "," + position.coords.longitude + "," + position.coords.state + "," + position.coords.city;
  
    const img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
    "+latlon+"&zoom=14&size=400x300&sensor=false&key=
    AIzaSyCwBTeZJQafMPXIkuHGMWSogR6vtvjFOtY
    ";
  
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  }
  return <div></div>;
};

export default locator;
