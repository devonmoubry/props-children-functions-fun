import React, { Component } from 'react';
export default class DisplayComponent extends Component {
  render() {
    return (
      <div className="display-component">
        <h1>Props, Children, Functions, Fun!</h1>
        <p>Messages:</p>
        <div className="what-was-said">{this.props.whatWasSaid}</div>
      </div>
    );
  }
}
