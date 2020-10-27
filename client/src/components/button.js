import * as React from "react";

class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {},
      infoWindow: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="row example-wrapper">
        <div className="col-xs-12 col-sm-6 example-col">
          <p>
            <button onClick={this.handleClick}>Profile</button>
            <button onClick={this.handleClick}>Map</button>
            <button onclick={this.handleClick}>Messages</button>
          </p>
          <div id="map"></div>
        </div>
      </div>
    );
  }
}
export default ButtonContainer;
