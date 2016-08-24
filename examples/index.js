/**
 * ES6 Buttons Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { RaisedButton, ButtonGroup } from 'ship-components-buttons';
import { Alert, Confirm, Modals, ModalActions, ModalStore } from '../src';

class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleExampleAlert = this.handleExampleAlert.bind(this);
    this.handleExampleMultpleAlerts = this.handleExampleMultpleAlerts.bind(this);
    this.handleConfirmExample = this.handleConfirmExample.bind(this);
    this.handleConfirmExampleTwo = this.handleConfirmExampleTwo.bind(this);
    this.state = {
      modals: ModalStore.getState()
    };
  }
  componentDidMount() {
    this.storeListener = ModalStore.onChange(this.handleChange)
  }

  componentWillUnmount() {
    this.storeListener.remove();
  }

  handleChange() {
    this.setState({
      modals: ModalStore.getState()
    });
  }

  handleExampleAlert() {
    ModalActions.open(
      <Alert>
        Here's a test confirmation alert box
      </Alert>
    );
  }

  handleExampleMultpleAlerts() {
    ModalActions.open(
      <Alert>
        Here's the first alert box
      </Alert>
    ).then(()=>{
      console.log('The first alert box was closed');
    });
    ModalActions.open(
      <Alert>
        And here's the next that was opened at the same time
      </Alert>
    );
  }

  handleConfirmExample() {
    ModalActions.open(
      <Confirm>
        Here's an example of a Confirm dialog.
      </Confirm>
    ).then(()=>{
      ModalActions.open(
        <Alert>
          You clicked "confirm"!
        </Alert>
      )
    });
  }

  handleConfirmExampleTwo() {
    ModalActions.open(
      <Confirm
        confirm='Yes'
        cancel='No'
      >
        Are you sure you want to delete nothing?
      </Confirm>
    ).then(()=>{
      ModalActions.open(
        <Alert>
          You deleted nothing!
        </Alert>
      )
    });
  }

  render() {
    return (
      <div>
        <h1>Examples</h1>
        <div className='example-group'>
          <h2>{'<Alert />'}</h2>
          <ButtonGroup fill>
            <RaisedButton onClick={this.handleExampleAlert} >
              Open Alert
            </RaisedButton>
            <RaisedButton onClick={this.handleExampleMultpleAlerts} >
              Open Multiple Alerts
            </RaisedButton>
          </ButtonGroup>
        </div>
        <div className='example-group'>
          <h2>{'<Confirm />'}</h2>
          <ButtonGroup fill>
            <RaisedButton onClick={this.handleConfirmExample} >
              Open Default Confirm
            </RaisedButton>
            <RaisedButton onClick={this.handleConfirmExampleTwo} >
              Open Custom Confirm
            </RaisedButton>
          </ButtonGroup>
        </div>
        <Modals
          modals={this.state.modals}
        />
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('examples'));
