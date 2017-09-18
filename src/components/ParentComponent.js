import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import DisplayComponent from './DisplayComponent';
export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: []
    }
  }
  handleInput(e) {
    e.preventDefault();
    console.log(e.target.value);
    //set the state on input change
    this.setState({whatToSay: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay});
    this.state.whatWasSaid.push(this.state.whatToSay)
    //clear our input by resetting state
    this.setState({whatToSay: "", whatWasSaid: this.state.whatWasSaid});
  }
  render() {
    return (
      <div>
        <div>
          <input className="form-control" autoFocus onChange={this.handleInput} value={this.state.whatToSay} type="text" placeholder="Say It, Don't Spray It!" />
        </div>
        <div>
          <ChildComponent handleSubmit={this.handleSubmit}/>
          <DisplayComponent whatWasSaid={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}
