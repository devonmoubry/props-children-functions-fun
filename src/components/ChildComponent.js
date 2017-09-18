import React, { Component } from 'react';
export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <input className="btn btn-primary" type="submit" onClick={this.props.handleSubmit}/>
        </div>
      </div>
    );
  }
}
