// import googMap from '../components/googMap';
// import getCurrentPosition from '../components/currentPosition';
import * as React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import ReactDOM from "react-dom";
// import { Button } from "@progress/kendo-react-buttons";

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: AIzaSyAMAPrhW6gC1lGZuCVqZB7TdwoSOH2qjpA,
})(MapContainer);
