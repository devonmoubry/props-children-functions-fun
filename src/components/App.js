import React, { Component } from 'react';
import '../styles/App.css';


class Header extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Navbar</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Messages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Login</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="navbar fixed-bottom navbar-inverse bg-inverse">
        <h4>Footer</h4>
      </footer>
    );
  }
}

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

class ParentComponent extends Component {
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

class ChildComponent extends Component {
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

class DisplayComponent extends Component {
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


class App extends Component {
  render() {
    return (
      <div className="allTheThings">
        <BaseLayout>
          <ParentComponent />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
