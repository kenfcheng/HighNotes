import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '@progress/kendo-react-buttons';
import map;

class ButtonContainer extends React.Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Options</p>
                <p>
                <Button primary={true}>Browse</Button>
                </p>
            </div>
        );
    }
}
ReactDOM.render(
    <ButtonContainer />,
    document.querySelector('my-app')
);