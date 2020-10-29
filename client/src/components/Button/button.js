import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "@progress/kendo-react-buttons";

class ButtonContainer extends React.Component {
  render() {
    return (
      <div className="row example-wrapper">
        <div className="col-xs-12 col-sm-6 example-col">
          <p>
            <Button primary={true}>Profile</Button>;
            <Button primary={true}>Map</Button>;
            <Button primary={true}>Messages</Button>;
          </p>
        </div>
      </div>
    );
  }
}

export default ButtonContainer;
