import React, { Component } from 'react';
import Container from './components/container';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-inner">
            <img
              src="https://www.home24.com/homevierundzwanzig/dist-production/images/home24_logo.svg"
              className="App-logo"
              alt="logo"
            />
            <button className="btn-search">&#x1F50D;</button>
          </div>
        </header>
        <Container />
      </div>
    );
  }
}

export default App;
