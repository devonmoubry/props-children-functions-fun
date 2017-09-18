import React, { Component } from 'react';
import BaseLayout from './BaseLayout';
import ParentComponent from './ParentComponent';
import '../styles/App.css';

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
