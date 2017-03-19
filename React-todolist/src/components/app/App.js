import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={process.env.PUBLIC_URL + 'logo.svg'} className="App-logo" alt="logo" />
          <h2>Todo list</h2>
        </div>
      </div>
    );
  }
}

export default App;
